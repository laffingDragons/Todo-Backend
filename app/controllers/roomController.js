const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib');
const check = require('../libs/checkLib');
const token = require('../libs/tokenLib');
const AuthModel = mongoose.model('Auth');
const mail = require('../libs/mailLib');

/* Models */
const RoomModel = mongoose.model('Room');


/* Get all room Details */
let getAllRoom = (req, res) => {

    RoomModel.find()
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'RoomController: getAllRoom', 10)
                let apiResponse = response.generate(true, 'Failed To Find Room Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Room Found', 'RoomController: getAllRoom')
                let apiResponse = response.generate(true, 'No Room Found', 404, null)
                res.send(apiResponse)
            } else {

                let apiResponse = response.generate(false, 'All Room Details Found', 200, result);
                res.send(apiResponse);
            }
        })
}// end get all Rooms

// Pushing the Room to request Array
let requestToJoin = (req, res) => {

    let options = { $addToSet: { requested: req.body.requested } }
    RoomModel.update({ 'roomId': req.params.roomId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'roomController: Database error', 10)
            let apiResponse = response.generate(true, 'Failed To Request', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Successfully sent request to join chatroom', 200, result)
            res.send(apiResponse)
        }
    });// end Room model update

}

let getRoomById = (req, res) => {
    RoomModel.findOne({ 'roomId': req.params.roomId })
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'RoomController: getSingleRoom', 10)
                let apiResponse = response.generate(true, 'Failed To Find Room Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Room Found', 'RoomController:getSingleRoom')
                let apiResponse = response.generate(true, 'No Room Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Room Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get single Room

// sending invitation mail
let invitationMail = (req, res) => {

    if (req.body.email) {
        if (!validateInput.Email(req.body.email)) {

            let apiResponse = response.generate(true, 'Email Does not met the requirement', 400, null)
            res.send(apiResponse);

        } else {

            let roomName = req.body.roomName;
            let email = req.body.email;
            let link = req.body.link;
            let senderName = req.body.senderName;

            mail.invitationMail(roomName, email, link, senderName);

            let apiResponse = response.generate(false, 'Email sent successfully', 200, null)
            res.send(apiResponse);

        }
    } else {
        logger.error('Field Missing During Room Creation', 'RoomController: createRoom()', 5)
        let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
        res.send(apiResponse);
    }
    // end validate Room input
}

// Edit room
let editRoomName = (req, res) => {

    RoomModel.update({ 'roomId': req.params.roomId }, { 'roomName': req.body.roomName }).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'roomController:editRoom', 10)
            let apiResponse = response.generate(true, 'Failed To edit Room name', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Room Found', 'RoomController: editRoom')
            let apiResponse = response.generate(true, 'No Room Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Room details edited', 200, result)
            res.send(apiResponse)
        }
    });// end Room model update


}// end edit Room

//add user to room
let addUserToRoom = (req, res) => {
    req.body.members = req.body.members.split(',')

    let options = { $addToSet: { members: { $each: req.body.members } } }
    RoomModel.update({ 'roomId': req.params.roomId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'roomController:addUserToRoom', 10)
            let apiResponse = response.generate(true, 'Failed To add members Room ', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Room Found', 'RoomController: addUserToRoom')
            let apiResponse = response.generate(true, 'No Room Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Users Added to room Successfully', 200, result)
            res.send(apiResponse)
        }
    });// end Room model update


}// end add user Room

// remove user from member
let removeUser = (req, res) => {

    let options = { $pull: { members: req.body.members } }
    RoomModel.update({ 'roomId': req.params.roomId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'roomController:removeUser', 10)
            let apiResponse = response.generate(true, 'Failed To remove user from room', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Room Found', 'RoomController: removeUser')
            let apiResponse = response.generate(true, 'No Room Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Left the room successfully', 200, result)
            res.send(apiResponse)
        }
    });// end Room model update
}// end remove User


// remove user from member
let removeUserFromRequested = (req, res) => {

    let options = { $pull: { requested: req.body.requested } }
    RoomModel.update({ 'roomId': req.params.roomId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'roomController:removeUser', 10)
            let apiResponse = response.generate(true, 'Failed To remove user from Requested', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Room Found', 'RoomController: removeUserFromRequest')
            let apiResponse = response.generate(true, 'No Room Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'User request has Declined', 200, result)
            res.send(apiResponse)
        }
    });// end Room model update

}//end of remove user from requested array


module.exports = {

    getAllRoom: getAllRoom,
    requestToJoin: requestToJoin,
    getRoomById: getRoomById,
    invitationMail: invitationMail,
    editRoomName: editRoomName,
    addUserToRoom: addUserToRoom,
    removeUser: removeUser,
    removeUserFromRequested: removeUserFromRequested,

}