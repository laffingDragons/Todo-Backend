const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    /**
	* @api {get} /api/v1/users/view/all View all users
	* @apiVersion 0.0.1
    * @apiGroup users
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "All User Details Found",
	*		"status": 200,
	*		"data": [
    *                  {
    *                        "requested": Object.type(Array),  
    *                        "request": Object.type(Array),  
    *                        "friends": Object.type(Array),
	*                        "createdOn": "Date",
    *                        "mobileNumber": "Number",
    *                        "email": "String",
    *                        "lastName": "String",
    *                        "firstName": "String",
    *                        "userId": "String",
    *                  },
    *                 .......
	*                ]
	*   }
	*
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find User Details",
	*   "status": 500,
	*   "data": null
	* }
	*/
    
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    /**
    * @api {get} /api/v1/users/:userId/details User detail
    * @apiGroup users
    * @apiVersion  1.0.0
    *
	* @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} userId User Id of the user. (params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "User Details Found",
    *        "status": 200,
    *        "data": {
    *                 "requested": Object.type(Array),  
    *                 "request": Object.type(Array),  
    *                 "friends": Object.type(Array),
    *                 "createdOn": "Date",
    *                 "mobileNumber": "Number",
    *                 "email": "String",
    *                 "lastName": "String",
    *                 "firstName": "String",
    *                 "userId": "String"
    *        }
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find User Details",
	*   "status": 500,
	*   "data": null
	* }
    */

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
    * @api {post} /api/v1/users/signup Signup
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} email Email of the user. (body params) (required)
    * @apiParam {string} password password of the user. (body params) (required)
    * @apiParam {string} firstName First Name of the user. (body params) (required)
    * @apiParam {string} lastName Last Name of the user. (body params) (required)
    * @apiParam {number} mobileNumber Mobile number of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "User created",
    *        "status": 200,
    *        "data": {
    *           "authToken": "String",
    *            "userDetails": {
    *            "requested": Object.type(Array),  
    *            "request": Object.type(Array),  
    *            "friends": Object.type(Array),
    *            "createdOn":"Date",    
    *            "mobileNumber": "String",
    *            "email": "String",
    *            "lastName": "String",
    *            "firstName": "String",
    *            "userId": "String"
    *       }
    * 
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Create User",
	*   "status": 500,
	*   "data": null
	* }
    */

    app.post(`${baseUrl}/forgot-password`, userController.forgotPasswordFunction);
    /**
    * @api {post} /api/v1/users/forgot-password Forgot password
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} email Email of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Sending recovery mail. Please check your email.",
    *        "status": 200,
    *        "data": null
    * 
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Email does not exist",
	*   "status": 400,
	*   "data": null
	* }
    */
   
    
    app.put(`${baseUrl}/change-password`, userController.changePasswordFunction);
     /**
    * @api {put} /api/v1/users/change-password Change password
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} userId User Id of the user. (body params) (required)
    * @apiParam {string} password Password of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "User details edited",
    *        "status": 200,
    *        "data": {
    *                 "requested": Object.type(Array),  
    *                 "request": Object.type(Array),  
    *                 "friends": Object.type(Array),
    *                 "createdOn": "Date",
    *                 "mobileNumber": "Number",
    *                 "email": "String",
    *                 "lastName": "String",
    *                 "firstName": "String",
    *                 "userId": "String"
    *                }
    * 
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To edit user details",
	*   "status": 500,
	*   "data": null
	* }
    */    

    app.post(`${baseUrl}/login`, userController.loginFunction);
    /**
	* @api {post} /api/v1/users/login Login
    * @apiVersion 0.0.1
    * @apiGroup users
	*
	* @apiParam {string} email email of the user. (body params) (required)
    * @apiParam {string} password password of the user. (body params) (required)
    *
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "Login Successful",
	*		"status": 200,
	*		"data":  {
    *                "authToken": "String",
    *                "userDetails": {
    *                    "requested": Object.type(Array),  
    *                    "request": Object.type(Array),  
    *                    "friends": Object.type(Array),  
    *                    "mobileNumber": "Number",
    *                    "email": "String",
    *                    "lastName": "String",
    *                    "firstName": "String",
    *                    "userId": "String",
    *                }
	*   }
	*
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Error in Login",
	*   "status": 500,
	*   "data": null
	* }
	*/

    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

    /**
    * @api {put} /api/v1/users/:userId/edit Edit
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} email Email of the user. (body params) (required)
    * @apiParam {string} firstName First Name of the user. (body params) (required)
    * @apiParam {string} lastName Last Name of the user. (body params) (required)
    * @apiParam {number} mobileNumber Mobile number of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "User details edited",
    *        "status": 200,
    *        "data": {
    *            "authToken": "String",
    *            "userDetails": {
    *            "requested": Object.type(Array),  
    *            "request": Object.type(Array),  
    *            "friends": Object.type(Array),
    *            "createdOn":"Date",    
    *            "mobileNumber": "String",
    *            "email": "String",
    *            "lastName": "String",
    *            "firstName": "String",
    *            "userId": "String"
    *       }
    * 
    *    }
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To edit user details",
	*   "status": 500,
	*   "data": null
	* }
    */
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);
    
    /**
    * @api {post} /api/v1/users/:userId/delete Delete
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} userId User Id of the user. (params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Deleted the user successfully",
    *        "status": 200,
    *        "data":{
    *                 "requested": Object.type(Array),  
    *                 "request": Object.type(Array),  
    *                 "friends": Object.type(Array),
    *                 "createdOn":"Date",    
    *                 "mobileNumber": "String",
    *                 "email": "String",
    *                 "lastName": "String",
    *                 "firstName": "String",
    *                 "userId": "String"
    *               }
    *      }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To delete user",
	*   "status": 500,
	*   "data": null
	* }
    */
    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);
     /**
    * @api {post} /api/v1/users/logout Logout
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} userId User Id of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Logged Out Successfully",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "error occured",
	*   "status": 500,
	*   "data": null
	* }
    */    

   app.put(`${baseUrl}/:userId/request`, auth.isAuthorized, userController.request);
    /**
    * @api {put} /api/v1/users/:userId/request Request
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} userId User Id of the user. (body params) (required)
    * @apiParam {string} request User Id of the user which is to be requested. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Successfully sent request",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Request",
	*   "status": 500,
	*   "data": null
	* }
    */      


   app.put(`${baseUrl}/:userId/requested`, auth.isAuthorized, userController.requested);
    /**
    * @api {put} /api/v1/users/:userId/requested Requested
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} requested User Id of the user which is to be requested. (body params) (required)
    * @apiParam {string} userId User Id of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Successfully sent request",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Request",
	*   "status": 500,
	*   "data": null
	* }
    */      

    
   app.put(`${baseUrl}/:userId/addAsFriend`, auth.isAuthorized, userController.addAsFriend);
   /**
    * @api {put} /api/v1/users/:userId/addAsFriend Add as Friend
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} authToken The authToken for authentication. (Send authToken as query params)
    * @apiParam {string} request User Id of the user which is to be added to friend's list. (body params) (required)
    * @apiParam {string} userId User Id of the user. (body params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Friend added successfully",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Add To Friends Array",
	*   "status": 500,
	*   "data": null
	* }
    */       
   app.post(`${baseUrl}/findFriend`, auth.isAuthorized, userController.findFriends);
    /**
	* @api {post} /api/v1/users/findFriend Find friends
	* @apiVersion 0.0.1
    * @apiGroup users
	*
	* @apiParam {String} authToken The authToken for authentication. (Send authToken as query params)
	* @apiParam {String} friends Friends array of the user. (Send friends array of the user as body params)
	*
	* @apiSuccessExample {json} Success-Response:
	*    
	*   {
	*		"error": false,
	*		"message": "User Friends Found",
	*		"status": 200,
	*		"data": [
    *                  {
    *                        "requested": Object.type(Array),  
    *                        "request": Object.type(Array),  
    *                        "friends": Object.type(Array),
	*                        "createdOn": "Date",
    *                        "mobileNumber": "Number",
    *                        "email": "String",
    *                        "lastName": "String",
    *                        "firstName": "String",
    *                        "userId": "String",
	*                  }
	*                ]
	*   }
	*
	* @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To Find User Details",
	*   "status": 500,
	*   "data": null
	* }
	*/
   app.post(`${baseUrl}/invitation`, userController.sendInvite);
   /**
    * @api {post} /api/v1/users/invitation Invitation
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} userId UserId of the user. (query params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Email sent",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To find User",
	*   "status": 500,
	*   "data": null
	* }
    */       

   app.post(`${baseUrl}/addInvitedFriend`, userController.addInvitedFriend);
    /**
    * @api {post} /api/v1/users/addInvitedFriend Add invited Friend
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} inviteId UserId of the user's friend who has invited him to the platform. (query params) (required)
    * @apiParam {string} userId UserId of the user's . (query params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Friend added to friends list",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To find User",
	*   "status": 500,
	*   "data": null
	* }
    */       

   app.post(`${baseUrl}/unFriend`, userController.unFriend);
   /**
    * @api {post} /api/v1/users/unFriend UnFriend
    * @apiGroup users
    * @apiVersion  1.0.0
    *
    * @apiParam {string} friendId UserId of the user's friend to unfriend. (query params) (required)
    *
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
    *     {
    *        "error": false,
    *        "message": "Friend removed from friends list",
    *        "status": 200,
	*        "data": null
    *     }
    * 
    * @apiErrorExample {json} Error-Response:
	*
	* {
	*   "error": true,
	*   "message": "Failed To find User",
	*   "status": 500,
	*   "data": null
	* }
    */       
}
