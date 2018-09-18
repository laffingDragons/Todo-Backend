const express = require('express');
const router = express.Router();
const taskController = require("./../../app/controllers/taskController");
const notifyController = require("./../controllers/notifyController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/task`;


    app.get(`${baseUrl}/all`, auth.isAuthorized, taskController.getAllTask);
    /**
	* @api {get} /api/v1/task/all View all Tasks
	* @apiVersion 0.0.1
    * @apiGroup task
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "All Task Details Found",
	*		"status": 200,
	*		"data": [
    *                  {
	*                        "createdOn": "Date",
	*                        "modifiedOn": "Date",
    *                        "mobileNumber": "Number",
    *                        "createdByUserId": "String",
    *                        "modifiedBy": "String",
    *                        "taskId": "String",
    *                        "tasks":[
    *                                   {
    *                                       "task":"String",
    *                                       "status":"String",
    *                                       "subtask": Object.type(Array)
    *                                       }
    *                                   ]
    *                  },
    *                   ......            
	*                ]
	*   }
	*
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find Task Details",
	*   "status": 500,
	*   "data": null
	* }
	*/
    
    app.get(`${baseUrl}/:taskId/details`, auth.isAuthorized, taskController.getSingleTask);
     /**
	* @api {get} /api/v1/task/:taskId/details Get single task details
	* @apiVersion 0.0.1
    * @apiGroup task
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} taskId The taskId of task for details. (params) (required)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Task Details Found",
	*		"status": 200,
	*		"data": [
    *                  {
	*                        "createdOn": "Date",
	*                        "modifiedOn": "Date",
    *                        "mobileNumber": "Number",
    *                        "createdByUserId": "String",
    *                        "modifiedBy": "String",
    *                        "taskId": "String",
    *                        "tasks":[
    *                                   {
    *                                       "task":"String",
    *                                       "status":"String",
    *                                       "subtask": Object.type(Array)
    *                                       }
    *                                   ]
	*                  }
	*                ]
	*   }
	*
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find Task Details",
	*   "status": 500,
	*   "data": null
	* }
	*/
    app.put(`${baseUrl}/:taskId/edit`, auth.isAuthorized, taskController.editTask);
      /**
	* @api {put} /api/v1/task/:taskId/edit Edit single task details
	* @apiVersion 0.0.1
    * @apiGroup task
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} taskId The taskId of task for details. (params) (required)
	* @apiParam {String} title The title of task. (body params) (required)
	* @apiParam {String} type The type of task. (body params) (required)
	* @apiParam {Object} tasks The subtask object of task. (body params) (required)
    * @apiParam {String} modifiedBy The userId of user. (body params) (required)
    *    
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Task details edited",
	*		"status": 200,
	*		"data":null
	*   }
	*
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To edit Task details",
	*   "status": 500,
	*   "data": null
	* }
    */
    
    app.post(`${baseUrl}/:taskId/delete`, auth.isAuthorized, taskController.deleteTask);
         /**
	* @api {post} /api/v1/task/:taskId/delete Delete task
	* @apiVersion 0.0.1
    * @apiGroup task
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} taskId The taskId of task for details. (params) (required)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Task deleted successfully",
	*		"status": 200,
	*		"data":null
	*   }
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To delete Task",
	*   "status": 500,
	*   "data": null
	* }
    */
    app.post(`${baseUrl}/create`, auth.isAuthorized, taskController.createTask);
    /**
	* @api {post} /api/v1/task/create Create task
	* @apiVersion 0.0.1
    * @apiGroup task
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} title The title of task. (body params) (required)
	* @apiParam {String} type The type of task. (body params) (required)
	* @apiParam {Object} tasks The subtask object of task. (body params) (required)
	* @apiParam {String} createdBy The name of user. (body params) (required)
	* @apiParam {String} createdByUserId The userId of user. (body params) (required)
	* @apiParam {String} modifiedBy The userId of user. (body params) (required)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Successfully created new Task",
	*		"status": 200,
	*		"data":null
	*   }
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed to create new Task",
	*   "status": 500,
	*   "data": null
	* }
    */
    app.get(`${baseUrl}/:userId/undo`, auth.isAuthorized, taskController.undoTask);
     /**
	* @api {get} /api/v1/task/:userId/undo Undo task
	* @apiVersion 0.0.1
    * @apiGroup task
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} userId The userId of user. (params) (required)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Undo operation successful",
	*		"status": 200,
	*		"data":null
	*   }
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To edit Task details",
	*   "status": 500,
	*   "data": null
	* }
    */    
    app.get(`${baseUrl}/:userId/notification`, auth.isAuthorized, notifyController.getNotifyById);
      /**
	* @api {get} /api/v1/task/:userId/notification Get notifications
	* @apiVersion 0.0.1
    * @apiGroup notification
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} userId The userId of user. (params) (required)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Notify Details Found",
	*		"status": 200,
	*		"data":[
    *                {
    *                    "notifyId": "String",
    *                    "createdOn": "Date",
    *                    "seen": "Boolean",
    *                    "message": "String",
    *                    "receiverId": Object.type(Array),
    *                    "receiverName": "String",
    *                    "senderId": "String",
    *                    "senderName": "String"
    *                },
    *               .......
    *               ]
	*   }
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find Notify Details",
	*   "status": 500,
	*   "data": null
	* }
    */ 
   }