/**
 * module dependencies.
 */
const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')

/* Models */
const ChatModel = mongoose.model('Chat')
const UserModel = mongoose.model('User')
const AuthModel = mongoose.model('Auth')

/**
 * function to retrieve chat of the user.
 * params: receiverId, senderId, skip.
 */
let getUsersChat = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.senderId) || check.isEmpty(req.query.receiverId)) {
        logger.info('parameters missing', 'getUsersChat handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get chats.
  let findChats = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {
        $or: [
          {
            $and: [
              { senderId: req.query.senderId },
              { receiverId: req.query.receiverId }
            ]
          },
          {
            $and: [
              { receiverId: req.query.senderId },
              { senderId: req.query.receiverId }
            ]
          }
        ]
      }

      ChatModel.find(findQuery)
        .select('-_id -__v -chatRoom')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: getUsersChat', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No Chat Found', 'Chat Controller: getUsersChat')
            let apiResponse = response.generate(true, 'No Chat Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('chat found and listed.')

            // reversing array.
            let reverseResult = result.reverse()

            resolve(result)
          }
        })
    })
  } // end of the findChats function.

  // making promise call.
  validateParams()
    .then(findChats)
    .then((result) => {
      let apiResponse = response.generate(false, 'All Chats Listed', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the getUsersChat function.

/**
 * function to retrieve chat of the group.
 * params: chatRoom, skip.
 */
let getGroupChat = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.roomId)) {
        logger.info('parameters missing', 'getUsersChat handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get chats.
  let findChats = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {
        chatRoom: req.query.roomId
      }

      ChatModel.find(findQuery)
        .select('-_id -__v -receiverName -receiverId')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: getUsersChat', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No Chat Found', 'Chat Controller: getUsersChat')
            let apiResponse = response.generate(true, 'No Chat Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('chat found and listed.')

            // reversing array.
            let reverseResult = result.reverse()

            resolve(result)
          }
        })
    })
  } // end of the findChats function.

  // making promise call.
  validateParams()
    .then(findChats)
    .then((result) => {
      let apiResponse = response.generate(false, 'All Group Chats Listed', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the getGroupChat function.

/**
 * function to mark multi chat as seen.
 * params: chatIdCsv
 */
let markChatAsSeen = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.chatIdCsv)) {
        logger.info('parameters missing', 'markChatAsSeen handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to mark chat as seen.
  let modifyChat = () => {
    return new Promise((resolve, reject) => {
      let findQuery = {
        chatId: req.query.chatIdCsv
      }

      let updateQuery = {
        seen: true
      }

      ChatModel.update(findQuery, updateQuery, { multi: true })
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: markChatAsSeen', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (result.n === 0) {
            logger.info('No Chat Found', 'Chat Controller: markChatAsSeen')
            let apiResponse = response.generate(true, 'No Chat Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('chat found and updated.')

            resolve(result)
          }
        })
    })
  } // end of the modifyChat function.

  // making promise call.
  validateParams()
    .then(modifyChat)
    .then((result) => {
      let apiResponse = response.generate(false, 'chat found and updated.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the markChatAsSeen function.

/**
 * function to get number of unread messages.
 * params: userId, senderId.
 */
let countUnSeenChat = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.userId)) {
        logger.info('parameters missing', 'countUnSeenChat handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get chats.
  let countChat = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {}

      findQuery['receiverId'] = req.query.userId
      findQuery['seen'] = false

      if (check.isEmpty(req.query.senderId) === false) {
        findQuery['senderId'] = req.query.senderId
      }

      ChatModel.count(findQuery)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: countUnSeenChat', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else {
            console.log('unseen chat count found.')

            resolve(result)
          }
        })
    })
  } // end of the countChat function.

  // making promise call.
  validateParams()
    .then(countChat)
    .then((result) => {
      let apiResponse = response.generate(false, 'unseen chat count found.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the countUnSeenChat function.

/**
 * function to get unread messages.
 * params: userId, senderId.
 */
let findUnSeenChat = (req, res) => {
  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.userId)) {
        logger.info('parameters missing', 'findUnSeenChat handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // function to get chats.
  let findChats = () => {
    return new Promise((resolve, reject) => {
      // creating find query.
      let findQuery = {}

      findQuery['receiverId'] = req.query.userId
      findQuery['seen'] = false

      if (check.isEmpty(req.query.senderId) === false) {
        findQuery['senderId'] = req.query.senderId
      }

      ChatModel.find(findQuery)
        .select('-_id -__v')
        .sort('-createdOn')
        .skip(parseInt(req.query.skip) || 0)
        .lean()
        .limit(10)
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: findUnSeenChat', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No Chat Found', 'Chat Controller: findUnSeenChat')
            let apiResponse = response.generate(true, 'No Chat Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('chat found and listed.')

            // reversing array.
            let reverseResult = result.reverse()

            resolve(result)
          }
        })
    })
  } // end of the findChats function.

  // making promise call.
  validateParams()
    .then(findChats)
    .then((result) => {
      let apiResponse = response.generate(false, 'chat found and listed.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the findUnSeenChat function.

/**
 * function to find user from whom chat is unseen.
 * params: userId.
 */
let findUserListOfUnseenChat = (req, res) => {

  // function to validate params.
  let validateParams = () => {
    return new Promise((resolve, reject) => {
      if (check.isEmpty(req.query.userId)) {
        logger.info('parameters missing', 'findUserListOfUnseenChat handler', 9)
        let apiResponse = response.generate(true, 'parameters missing.', 403, null)
        reject(apiResponse)
      } else {
        resolve()
      }
    })
  } // end of the validateParams function.

  // find distinct sender.
  let findDistinctSender = () => {
    return new Promise((resolve, reject) => {
      ChatModel.distinct('senderId', { receiverId: req.query.userId, seen: false })
        .exec((err, senderIdList) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: findUserListOfUnseenChat', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(senderIdList)) {
            logger.info('No Unseen Chat User Found', 'Chat Controller: findUserListOfUnseenChat')
            let apiResponse = response.generate(true, 'No Unseen Chat User Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('User found and userIds listed.')

            console.log(senderIdList)

            resolve(senderIdList)
          }
        })
    })
  } // find findDistinctSender function.

  // function to find user info.
  let findUserInfo = (senderIdList) => {
    return new Promise((resolve, reject) => {
      UserModel.find({ userId: { $in: senderIdList } })
        .select('-_id -__v -password -email -mobileNumber')
        .lean()
        .exec((err, result) => {
          if (err) {
            console.log(err)
            logger.error(err.message, 'Chat Controller: findUserListOfUnseenChat', 10)
            let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
            reject(apiResponse)
          } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'Chat Controller: findUserListOfUnseenChat')
            let apiResponse = response.generate(true, 'No User Found', 404, null)
            reject(apiResponse)
          } else {
            console.log('User found and userIds listed.')

            resolve(result)
          }
        })
    })
  } // end of the findUserInfo function.

  // making promise call.
  validateParams()
    .then(findDistinctSender)
    .then(findUserInfo)
    .then((result) => {
      let apiResponse = response.generate(false, 'user found and listed.', 200, result)
      res.send(apiResponse)
    })
    .catch((error) => {
      res.send(error)
    })
} // end of the findUserListOfUnseenChat function.




/**
 * exporting functions.
 */
module.exports = {
  getUsersChat: getUsersChat,
  getGroupChat: getGroupChat,
  markChatAsSeen: markChatAsSeen,
  countUnSeenChat: countUnSeenChat,
  findUnSeenChat: findUnSeenChat,
  findUserListOfUnseenChat: findUserListOfUnseenChat
}
