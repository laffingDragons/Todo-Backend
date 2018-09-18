const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth');
const mail = require('../libs/mailLib')

/* Models */
const UserModel = mongoose.model('User')


/* Get all user Details */
let getAllUser = (req, res) => {

    UserModel.find()
        .select(' -__v -_id -password')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'userController: getAllUser', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'userController: getAllUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {

                let apiResponse = response.generate(false, 'All User Details Found', 200, result);
                res.send(apiResponse);
            }
        })
}// end get all users

/* Get single user details */
let getSingleUser = (req, res) => {
    UserModel.findOne({ 'userId': req.params.userId })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'userController: getSingleUser', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'userController:getSingleUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'User Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get single user


//Delete user
let deleteUser = (req, res) => {

    UserModel.findOneAndRemove({ 'userId': req.params.userId }).select(' -__v -_id -password').exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'userController: deleteUser', 10)
            let apiResponse = response.generate(true, 'Failed To delete user', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'userController: deleteUser')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Deleted the user successfully', 200, result)
            res.send(apiResponse)
        }
    });// end user model find and remove


}// end delete user


// edit user details
let editUser = (req, res) => {

    let options = req.body;
    UserModel.update({ 'userId': req.params.userId }, options).select('-password -__v -_id').exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'userController:editUser', 10)
            let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'userController: editUser')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'User details edited', 200, result)
            res.send(apiResponse)
        }
    });// end user model update

}// end edit user


// Pushing the user  to request Array
let request = (req, res) => {

    // adding to request of the desire friend
    let options = { $addToSet: { request: req.body.request } }
    UserModel.update({ 'userId': req.params.userId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'userController: Database error', 10)
            let apiResponse = response.generate(true, 'Failed To Request', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Successfully sent request', 200, null)
            res.send(apiResponse)
        }
    });// end user model update

}//end of request



// adding to requested to own list
let requested = (req, res) => {

    let options = { $addToSet: { requested: req.params.userId } }
    UserModel.update({ 'userId': req.body.request }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'userController: Database error', 10)
            let apiResponse = response.generate(true, 'Failed To Request', 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Successfully sent request', 200, null)
            res.send(apiResponse)
        }
    });// end user model update

}//end of requested


// adding user to friends list
let addAsFriend = (req, res) => {

    // adding user's request to friends array 
    let addUserToFriendsArray = () => {
        return new Promise((resolve, reject) => {

            let options = { $addToSet: { friends: req.body.request } }
            UserModel.update({ 'userId': req.params.userId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: Database error', 10)
                    let apiResponse = response.generate(true, 'Failed To Add User To Friends Array', 500, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Add User To Friends Array', 200, result)
                    resolve(apiResponse)
                }
            });// end user model update

        })
    }//end of add user to friends list


    // adding user to his friend's  "friends" array
    let addToFriendsArray = () => {
        return new Promise((resolve, reject) => {

            let options = { $addToSet: { friends: req.params.userId } }
            UserModel.update({ 'userId': req.body.request }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: Database error', 10)
                    let apiResponse = response.generate(true, 'Failed To Add To Friends Array', 500, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Successfully Added To Friends Array', 200, null)
                    resolve(apiResponse)
                }
            });// end user model update

        })
    }


    // removing user from requested array
    let removeFromRequest = () => {
        return new Promise((resolve, reject) => {

            let options = { $pull: { request: req.body.request } }
            UserModel.update({ 'userId': req.params.userId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: Database error', 10)
                    let apiResponse = response.generate(true, 'Failed To Remove From Requested', 500, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Successfully Removed From Requested', 200, result)
                    resolve(apiResponse)
                }
            });// end user model update

        })
    }


    // removing user from friend's request array
    let removeFromRequested = () => {
        return new Promise((resolve, reject) => {

            let options = { $pull: { requested: req.params.userId } }
            UserModel.update({ 'userId': req.body.request }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: Database error', 10)
                    let apiResponse = response.generate(true, 'Failed To Remove From Request', 500, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Successfully Removed From Request', 200, result)
                    resolve(apiResponse)
                }
            });// end user model update

        })
    }

    addUserToFriendsArray(req, res)
        .then(addToFriendsArray)
        .then(removeFromRequested)
        .then(removeFromRequest)
        .then((resolve) => {

            let apiResponse = response.generate(false, 'Friend added successfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })


}//end adding as friend controller


//find all the friends of the user
let findFriends = (req, res) => {

    let friends = req.body.friends.split(",");
    console.log('\x1b[36m', friends, '\x1b[0m');

    UserModel.find({ 'userId': friends })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'userController: getUserFriends', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No friends Found', 'userController:getUserFriends')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'User Friends Found', 200, result)
                res.send(apiResponse)
            }
        })

}//end of find all frirnds detail for a user


// start user signup function 
let signUpFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'Email Does not met the requirement', 400, null)
                    reject(apiResponse)
                } else if (check.isEmpty(req.body.password)) {
                    let apiResponse = response.generate(true, "Password parameter is missing", 400, null)
                    reject(apiResponse)
                } else {
                    resolve(req)
                }
            } else {
                logger.error('Field Missing During User Creation', 'userController: createUser()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input


    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email })
                .exec((err, retrievedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'userController: createUser', 10)
                        let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedUserDetails)) {
                        console.log(req.body)
                        let newUser = new UserModel({
                            userId: shortid.generate(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName || '',
                            email: req.body.email.toLowerCase(),
                            mobileNumber: req.body.mobile,
                            password: passwordLib.hashPassword(req.body.password),
                            createdOn: time.now()
                        })
                        newUser.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'userController: createUser', 10)
                                let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newUser.toObject();
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        logger.error('User Cannot Be Created.User Already Present', 'userController: createUser', 4)
                        let apiResponse = response.generate(true, 'User Already Present With this Email', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }// end create user function


    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }


    let saveToken = (tokenDetails) => {
        console.log("save token");
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    console.log(err.message, 'userController: saveToken', 10)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedTokenDetails)) {
                    let newAuthToken = new AuthModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }


    // Send mail after signUpFunction
    let sendSignupMail = () => {

        let email = req.body.email
        let fullName = `${req.body.firstName} ${req.body.lastName}`
        mail.signUpMail(email, fullName)

    }

    validateUserInput(req, res)
        .then(createUser)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            setTimeout(() => {
                sendSignupMail();
            }, 2000);
            delete resolve.password
            let apiResponse = response.generate(false, 'User created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end user signup function 


//sending the forgot password mail
let forgotPasswordFunction = (req, res) => {

    let validateUserInputForForgotPassword = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'Email does not exist', 400, null)
                    reject(apiResponse)
                } else {
                    resolve(req)
                }
            } else {
                logger.error('Field Missing During User Creation', 'userController: Forgot password controller', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input

    let findUser = () => {

        new Promise((resolve, reject) => {

            UserModel.findOne({ email: req.body.email })
                .exec((err, validEmail) => {
                    if (err) {
                        logger.error(err.message, 'userController: Forgot password controller', 10)
                        let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                        reject(apiResponse)
                    } else {

                        mail.forgotPasswordMail(validEmail.email, validEmail.userId); //code for sending email to reset password
                        resolve(validEmail);
                    }

                })

        })

    }

    validateUserInputForForgotPassword(req, res)
        .then(findUser)
        .then((resolve) => {

            let apiResponse = response.generate(false, 'Sending recovery mail. Please check your email.', 200, null) // null because dont want to show data to stranger
            res.send(apiResponse);

        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}


//send Invitation mail.
let sendInvite = (req, res) => {

    UserModel.findOne({ userId: req.query.userId })
        .exec((err, validEmail) => {
            if (err) {
                logger.error(err.message, 'userController: Invition mail controller', 10)
                let apiResponse = response.generate(true, 'Failed To find User', 500, null)
                res.send(apiResponse)
            } else {

                mail.invitationEmail(validEmail.userId, validEmail.firstName, req.query.email); //code for sending email to reset password
                let apiResponse = response.generate(false, 'Email sent', 200, null)
                res.send(apiResponse);

            }

        })

}//end of invitation mail.



//adding invited friend to friends array on both the users
let addInvitedFriend = (req, res) => {

    let options = { $push: { friends: req.query.inviteId } }

    UserModel.update({ userId: req.query.userId }, options)
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'userController: Adding invited friend ', 10)
                let apiResponse = response.generate(true, 'Failed To find User', 500, null)
                res.send(apiResponse)
            } else {

                // adding friend to inivited user

                UserModel.update({ userId: req.query.inviteId }, { $push: { friends: req.query.userId } })
                    .exec((err, result) => {
                        if (err) {
                            logger.error(err.message, 'userController: Adding invited friend ', 10)
                            let apiResponse = response.generate(true, 'Failed To find User', 500, null)
                            res.send(apiResponse)
                        } else {

                            let apiResponse = response.generate(false, `Friend added to friends list`, 200, null)
                            res.send(apiResponse)

                        }
                    })//end of adding friend
            }
        })//end of adding friend for invited user
}//end of adding friend unconditonally


//Unfriend  friend from friends array on both the users
let unFriend = (req, res) => {
    let options = { $pull: { friends: req.query.friendId } }

    UserModel.update({ userId: req.query.userId }, options)
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'userController: Removing friend ', 10)
                let apiResponse = response.generate(true, 'Failed To find User', 500, null)
                res.send(apiResponse)
            } else {

                // Removing friend from user doc

                UserModel.update({ userId: req.query.friendId }, { $pull: { friends: req.query.userId } })
                    .exec((err, result) => {
                        if (err) {
                            logger.error(err.message, 'userController: Removing friend ', 10)
                            let apiResponse = response.generate(true, 'Failed To find User', 500, null)
                            res.send(apiResponse)
                        } else {

                            let apiResponse = response.generate(false, `Friend removed from friends list`, 200, null)
                            res.send(apiResponse)

                        }
                    })//end of Removing friend
            }
        })//end of Removing friend for user
}//end of unfriend controller


// function to change password
let changePasswordFunction = (req, res) => {

    let password = passwordLib.hashPassword(req.body.password);

    UserModel.findOneAndUpdate({ 'userId': req.body.userId }, { 'password': password }).select('-password -__v -_id').exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'userController:editUser', 10)
            let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'userController: editUser')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'User details edited', 200, result)
            res.send(apiResponse)
        }
    });// end user model update

}


// start of login function 
let loginFunction = (req, res) => {
    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                        /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                        /* if Company Details is not found */
                    } else if (check.isEmpty(userDetails)) {
                        /* generate the response and the console error message here */
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        /* prepare the message and the api response here */
                        logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let validatePassword = (retrievedUserDetails) => {
        console.log("validatePassword");
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Login Failed', 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                } else {
                    logger.info('Login Failed Due To Invalid Password', 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Wrong Password.Login Failed', 400, null)
                    reject(apiResponse)
                }
            })
        })
    }

    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log("save token");
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    console.log(err.message, 'userController: saveToken', 10)
                    let apiResponse = response.generate(true, 'Error in Login', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedTokenDetails)) {
                    let newAuthToken = new AuthModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Save Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Save Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }

    findUser(req, res)
        .then(validatePassword)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Login Successful', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            res.send(err)
        })
}// end of the login function 


/**
 * function to logout user.
 * auth params: userId.
 */
let logout = (req, res) => {
    AuthModel.findOneAndRemove({ userId: req.body.userId }, (err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'user Controller: logout', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 'Already Logged Out or Invalid UserId', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
            res.send(apiResponse)
        }
    })
} // end of the logout function.


module.exports = {

    signUpFunction: signUpFunction,
    forgotPasswordFunction: forgotPasswordFunction,
    changePasswordFunction: changePasswordFunction,
    getAllUser: getAllUser,
    editUser: editUser,
    deleteUser: deleteUser,
    getSingleUser: getSingleUser,
    loginFunction: loginFunction,
    logout: logout,
    request: request,
    requested: requested,
    addAsFriend: addAsFriend,
    findFriends: findFriends,
    sendInvite: sendInvite,
    addInvitedFriend: addInvitedFriend,
    unFriend: unFriend

}// end exports