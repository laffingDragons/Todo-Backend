const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

const TaskModel = mongoose.model('Task');
const HistoryModel = mongoose.model('History');

//Getting all task
let getAllTask = (req, res) => {


    TaskModel.find()
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'TaskController: getAllTask', 10)
                let apiResponse = response.generate(true, 'Failed To Find Task Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Task Found', 'TaskController: getAllTask')
                let apiResponse = response.generate(true, 'No Task Found', 404, null)
                res.send(apiResponse)
            } else {

                let apiResponse = response.generate(false, 'All Task Details Found', 200, result);
                res.send(apiResponse);
            }
        })
}// end get all Tasks


//Getting single task
let getSingleTask = (req, res) => {
    TaskModel.findOne({ 'taskId': req.params.taskId })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'TaskController: getSingleTask', 10)
                let apiResponse = response.generate(true, 'Failed To Find Task Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Task Found', 'TaskController:getSingleTask')
                let apiResponse = response.generate(true, 'No Task Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Task Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get single Task


//Deleting a Task
let deleteTask = (req, res) => {

    let options = req.body;
    let friends = req.body.friends
    options.tasks = JSON.parse(req.body.tasks)


    TaskModel.findOne({ 'taskId': req.params.taskId })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'TaskController: getSingleTask', 10)
                let apiResponse = response.generate(true, 'Failed To Find Task Details for saving history', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Task Found', 'TaskController:getSingleTask')
                let apiResponse = response.generate(true, 'No Task Found', 404, null)
                res.send(apiResponse)
            } else {

                //saving task for Undo purposes
                let newHistory = new HistoryModel({

                    historyId: shortid.generate(),
                    usersFriends: friends.split(","),
                    data: JSON.stringify(result),
                    createdOn: options.modifiedOn
                })

                // saving the new hisstory
                newHistory.save((err, newHistory) => {
                    if (err) {

                        console.log(err)
                        logger.error(err.message, 'taskController: EditTask', 10)
                        let apiResponse = response.generate(true, 'Failed to Save History', 500, null)
                        res.send(apiResponse);

                    } else {


                        //Real  Delete task starts here
                        TaskModel.findOneAndRemove({ 'taskId': req.params.taskId }, options).select('-__v -_id').exec((err, result) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'taskController:editTask', 10)
                                let apiResponse = response.generate(true, 'Failed To delete Task ', 500, null)
                                res.send(apiResponse)
                            } else if (check.isEmpty(result)) {
                                logger.info('No Task Found', 'TaskController: editTask')
                                let apiResponse = response.generate(true, 'No Task Found', 404, null)
                                res.send(apiResponse)
                            } else {
                                let apiResponse = response.generate(false, 'Task deleted successfully', 200, null)
                                res.send(apiResponse)
                            }
                        });// end Task model delete



                    }
                })
            }
        })


}// end of delete task


//edit Task
let editTask = (req, res) => {

    let options = req.body;
    let friends = req.body.friends
    options.tasks = JSON.parse(req.body.tasks)


    TaskModel.findOne({ 'taskId': req.params.taskId })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'TaskController: getSingleTask', 10)
                let apiResponse = response.generate(true, 'Failed To Find Task Details for saving history', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Task Found', 'TaskController:getSingleTask')
                let apiResponse = response.generate(true, 'No Task Found', 404, null)
                res.send(apiResponse)
            } else {

                //saving task for Undo purposes
                let newHistory = new HistoryModel({

                    historyId: shortid.generate(),
                    usersFriends: friends.split(","),
                    data: JSON.stringify(result),
                    createdOn: options.modifiedOn
                })

                // saving the new hisstory
                newHistory.save((err, newHistory) => {
                    if (err) {

                        console.log(err)
                        logger.error(err.message, 'taskController: EditTask', 10)
                        let apiResponse = response.generate(true, 'Failed to Save History', 500, null)
                        res.send(apiResponse);

                    } else {


                        //Real  edit task starts here
                        TaskModel.update({ 'taskId': req.params.taskId }, options).select('-__v -_id').exec((err, result) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'taskController:editTask', 10)
                                let apiResponse = response.generate(true, 'Failed To edit Task details', 500, null)
                                res.send(apiResponse)
                            } else if (check.isEmpty(result)) {
                                logger.info('No Task Found', 'TaskController: editTask')
                                let apiResponse = response.generate(true, 'No Task Found', 404, null)
                                res.send(apiResponse)
                            } else {
                                let apiResponse = response.generate(false, 'Task details edited', 200, null)
                                res.send(apiResponse)
                            }
                        });// end Task model update



                    }
                })
            }
        })

}// end edit Task


//Creating a task
let createTask = (req, res) => {

    let obj = JSON.parse(req.body.tasks)

    let newTask = new TaskModel({

        taskId: shortid.generate(),
        title: req.body.title,
        type: req.body.type,
        tasks: obj,
        createdBy: req.body.createdBy,
        createdByUserId: req.body.createdByUserId,
        modifiedBy: req.body.modifiedBy,
        createdOn: time.now(),
        modifiedOn: time.now()
    })

    // saving the new task
    newTask.save((err, newTask) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'taskController: createTask', 10)
            let apiResponse = response.generate(true, 'Failed to create new Task', 500, null)
            res.send(apiResponse)
        } else {
            let newTaskObj = newTask.toObject();
            let apiResponse = response.generate(true, 'Successfully created new Task', 200, null)
            res.send(apiResponse)
        }
    })

}//end of creating task


//controller for undoing a task
let undoTask = (req, res) => {

    let data
    // Getting lastest changes done by the users from historyModel
    let fetchHistoryForUser = () => {

        return new Promise((resolve, reject) => {

            HistoryModel.findOne({ usersFriends: req.params.userId })
                .sort({ createdOn: -1 })
                .exec((err, retrievedHistory) => {
                    if (err) {
                        logger.error(err.message, 'HistoryController: Fetching History', 10)
                        let apiResponse = response.generate(true, 'Failed To Fetch History', 500, null)
                        reject(apiResponse);

                    } else if (check.isEmpty(retrievedHistory)) {

                        logger.info('No History Found', 'HistoryController: Fetching History', 5)
                        let apiResponse = response.generate(true, "You have reached to Bedrock. Can't Undo at this point.", 404, null)
                        reject(apiResponse)

                    } else {
                        data = retrievedHistory

                        resolve(retrievedHistory);

                    }
                })

        })
    }//end of fetching history


    // pushing that task into database
    let editDatabase = () => {
        return new Promise((resolve, reject) => {
            let undoObj = JSON.parse(data.data)

            //Real  edit task starts here
            TaskModel.update({ 'taskId': undoObj.taskId }, undoObj).select('-__v -_id').exec((err, result) => {

                if (err) {

                    console.log(err)
                    logger.error(err.message, 'taskController:editTask', 10)
                    let apiResponse = response.generate(true, 'Failed To edit Task details', 500, null)
                    reject(apiResponse)

                } else if (result.nModified === 0) {

                    // if task not found it means its has been deleted previously so will create a new task with same details
                    // saving the new task 
                    let newTask = new TaskModel({

                        taskId: undoObj.taskId,
                        title: undoObj.title,
                        type: undoObj.type,
                        tasks: undoObj.tasks,
                        createdBy: undoObj.createdBy,
                        createdByUserId: undoObj.createdByUserId,
                        modifiedBy: undoObj.modifiedBy,
                        createdOn: undoObj.createdOn,
                        modifiedOn: time.now()
                    })

                    newTask.save((err, newTask) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'taskController: createTask', 10)
                            let apiResponse = response.generate(true, 'Failed to create new Task', 500, null)
                            reject(apiResponse)
                        } else {

                            let newTaskObj = newTask.toObject();
                            let apiResponse = response.generate(true, 'Successfully created new Task', 200, newTaskObj)
                            resolve(newTaskObj)
                        }
                    })//end of create task if it is deleted

                } else {

                    resolve(result)

                }
            });// end Task model update


        })

    }//end of push task into database


    // removing the task from history
    let removeFromDatabase = () => {
        return new Promise((resolve, reject) => {

            HistoryModel.findOneAndRemove({ usersFriends: req.params.userId })
                .sort({ createdOn: -1 })
                .exec((err, removed) => {
                    if (err) {
                        logger.error(err.message, 'HistoryController: remove from History', 10)
                        let apiResponse = response.generate(true, 'Failed To Fetch History', 500, null)
                        reject(apiResponse);

                    } else {
                        resolve(200);
                    }
                })

        })
    }

    fetchHistoryForUser(req, res)
        .then(editDatabase)
        .then(removeFromDatabase)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Undo operation successful', 200, null)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}

module.exports = {

    getAllTask: getAllTask,
    getSingleTask: getSingleTask,
    deleteTask: deleteTask,
    editTask: editTask,
    createTask: createTask,
    undoTask: undoTask,

}