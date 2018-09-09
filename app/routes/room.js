const express = require('express');
const router = express.Router();
const roomController = require("./../../app/controllers/roomController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/room`;


    app.get(`${baseUrl}/all`, auth.isAuthorized, roomController.getAllRoom);
    /**
    * @api {get} /api/v1/room/all Get all Rooms
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "All Room Details Found",
    *        "status": 200,
    *        "data": [
    *                    {
    *                        "createdOn": "Date",
    *                       "admin": "String",
    *                        "active": "Boolean",
    *                        "requested": object(type = array),
    *                        "members":object(type = array),
    *                        "roomName": "String",
    *                        "roomId": "String",
    *                    },
    *             ..............
    *             ]
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find Room Details",
	*   "status": 500,
	*   "data": null
	* }
    */

    app.put(`${baseUrl}/:roomId/request`,  roomController.requestToJoin);
    /**
    * @api {put} /api/v1/room/:roomId/request Request for Room
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} requested User Id in requested array. (body params)
    * @apiParam {string} roomId Room Id of the room. (body params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Successfully sent request to join chatroom",
    *        "status": 200,
    *        "data": {
    *                       "createdOn": "Date",
    *                       "admin": "String",
    *                       "active": "Boolean",
    *                       "requested": object(type = array),
    *                       "members":object(type = array),
    *                       "roomName": "String",
    *                       "roomId": "String",
    *                    }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Request",
	*   "status": 500,
	*   "data": null
	* }
    */

    app.get(`${baseUrl}/:roomId/details`, auth.isAuthorized, roomController.getRoomById);
    /**
    * @api {get} /api/v1/room/:roomId/details Get Room by Id
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} roomId Room Id of the room. (params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Room Details Found",
    *        "status": 200,
    *        "data": {
    *                       "createdOn": "Date",
    *                       "admin": "String",
    *                       "active": "Boolean",
    *                       "requested": object(type = array),
    *                       "members":object(type = array),
    *                       "roomName": "String",
    *                       "roomId": "String",
    *                    }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find Room Details",
	*   "status": 500,
	*   "data": null
	* }
    */


    app.post(`${baseUrl}/invite`, auth.isAuthorized, roomController.invitationMail);
    /**
    * @api {post} /api/v1/room/invite Invitation mail
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} roomName Room name of the room. (body params)
    * @apiParam {string} email Email id of the person to whom the mail is to sent. (body params)
    * @apiParam {string} link Link of the room. (body params)
    * @apiParam {string} senderName Name of the member who will be sending the invitation. (body params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Email sent successfully",
    *        "status": 200,
    *        "data": null
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Email Does not met the requirement",
	*   "status": 400,
	*   "data": null
	* }
    */
    
    app.put(`${baseUrl}/:roomId/editRoomName`, auth.isAuthorized, roomController.editRoomName);
    /**
    * @api {put} /api/v1/room/:roomId/editRoomName Edit room name
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} roomId Room Id of the room. (body params)
    * @apiParam {string} roomName Room name of the room. (body params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Room details edited",
    *        "status": 200,
    *        "data": {
    *                       "createdOn": "Date",
    *                       "admin": "String",
    *                       "active": "Boolean",
    *                       "requested": object(type = array),
    *                       "members":object(type = array),
    *                       "roomName": "String",
    *                       "roomId": "String",
    *                    }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To edit Room name",
	*   "status": 500,
	*   "data": null
	* }
    */

    app.put(`${baseUrl}/:roomId/addUserToRoom`, auth.isAuthorized, roomController.addUserToRoom);
    /**
    * @api {put} /api/v1/room/:roomId/addUserToRoom Add Users to Room
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} roomId Room Id of the room. (body params)
    * @apiParam {string} members Array of userId which is to be added to room. (body params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Users Added to room Successfully",
    *        "status": 200,
    *        "data": {
    *                       "createdOn": "Date",
    *                       "admin": "String",
    *                       "active": "Boolean",
    *                       "requested": object(type = array),
    *                       "members":object(type = array),
    *                       "roomName": "String",
    *                       "roomId": "String",
    *                    }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To add members Room ",
	*   "status": 500,
	*   "data": null
	* }
    */
   
    
    app.put(`${baseUrl}/:roomId/removeUser`, auth.isAuthorized, roomController.removeUser);
     /**
    * @api {put} /api/v1/room/:roomId/removeUser Remove User from Room
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} roomId Room Id of the room. (body params)
    * @apiParam {string} members UserId which is to be reomoved from room. (body params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Failed To remove user from room",
    *        "status": 200,
    *        "data": {
    *                       "createdOn": "Date",
    *                       "admin": "String",
    *                       "active": "Boolean",
    *                       "requested": object(type = array),
    *                       "members":object(type = array),
    *                       "roomName": "String",
    *                       "roomId": "String",
    *                    }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Left the room successfully",
	*   "status": 500,
	*   "data": null
	* }
    */
   
    app.put(`${baseUrl}/:roomId/removeUserFromRequested`, auth.isAuthorized, roomController.removeUserFromRequested);
     /**
    * @api {put} /api/v1/room/:roomId/removeUserFromRequested Remove User from Requested
    * @apiGroup room
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} roomId Room Id of the room. (body params)
    * @apiParam {string} requested UserId which is to be removed From requested array. (body params)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "User request has Declined",
    *        "status": 200,
    *        "data": {
    *                       "createdOn": "Date",
    *                       "admin": "String",
    *                       "active": "Boolean",
    *                       "requested": object(type = array),
    *                       "members":object(type = array),
    *                       "roomName": "String",
    *                       "roomId": "String",
    *                    }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To remove user from Requested",
	*   "status": 500,
	*   "data": null
	* }
    */
}