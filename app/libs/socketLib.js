const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const time = require("./timeLib");
const response = require('./responseLib')
const ChatModel = mongoose.model('Chat')
const NotifyModel = mongoose.model('Notify')
// const redisLib = require('./redisLib')
const mail = require('./mailLib');

let setServer = (server) => {

    let allOnlineUsers = []

    let io = socketio.listen(server);

    let myIo = io.of('')

    myIo.on('connection', (socket) => {

        socket.emit("verifyUser", "SOme data");
        // code to verify the user and make him online

        socket.on('set-user', (authToken) => {
            
            tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
                if (err) {
                    
                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else {

                    console.log("user is verified..setting details");
                    let currentUser = user.data;
                    // setting socket user id 
                    socket.userId = currentUser.userId
                    let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    console.log(`${fullName} has Logged in successfully`);
                    
                    let userObject = {userId:currentUser.userId, fullName: fullName}
                    allOnlineUsers.push(userObject);
                    console.log(allOnlineUsers);
                    
                    // redisLib.setANewOnlineUserInHash("onlineUsers", key, value, (err, result) => {
                    //     if (err) {
                    //         console.log(`some error occured`, err);
                    //     } else {
                    //         // get online users lists
                    //         redisLib.getAllUsersInHash('onlineUsers', (err, result) => {

                    //             if (err) {
                    //                 console.log(err);
                    //             } else {

                    //                 //  making user to join global room
                    //                 socket.room = "Global"
                    //                 socket.join(socket.room);

                    //                 // very very important point to be noted here is that
                    //                 // broadcast emits to everyone except the client
                    //                 // socket.to(socket.room).broadcast.emit('online-user-list',result);
                    //                 myIo.emit('online-user-list', result);


                    //             }

                    //         })
                    //     }

                    // })

                    // let userObj = {userId:currentUser.userId,fullName:fullName}
                    // allOnlineUsers.push(userObj)

                    // // setting room name
                    socket.room = 'edChat'
                    // joining chat-group room.
                    socket.join(socket.room)
                    myIo.emit('online-user-list',allOnlineUsers);

                }


            })

        }) // end of listening set-user event


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online list
            // unsubscribe the user from his own channel

            console.log("user is disconnected");
            console.log(socket.userId);


            var removeIndex = allOnlineUsers.map(function(user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex,1)

            socket.leave(socket.room)
            socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);

        //     if (socket.userId) {
        //         redisLib.deleteUserFromHash('onlineUsers', socket.userId)
        //         redisLib.getAllUsersInHash('onlineUsers', (err, result) => {
        //             if (err) {
        //                 console.log(err);
        //             } else {
        //                 socket.leave(socket.room)
        //                 socket.to(socket.room).broadcast.emit('online-user-list', result)
        //             }
        //         })
        //     }

        }) // end of on disconnect


        // socket.on('refresh', () => {

        //     redisLib.getAllUsersInHash('onlineUsers', (err, result) => {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             //  making user to join global room
        //             socket.room = "Global"
        //             socket.join(socket.room);


        //         }
        //     })

        // })

        socket.on('notify', (data) => {

            console.log("socket chat-msg called")
            data['notifyId'] = shortid.generate()

            // event to save chat.
            setTimeout(function () {
                eventEmitter.emit('save-notify', data);

            }, 2000)

            myIo.emit(data.receiverId, data)

        });

        // Get chatroom msg
        // socket.on('chatroom-msg', (data) => {

        //     data['chatId'] = shortid.generate()

        //     // event to save chat.
        //     setTimeout(function () {
        //         eventEmitter.emit('save-chat', data);

        //     }, 2000)

        //     socket.to(data.chatRoom).broadcast.emit('room-msg', data);

        // });

        //subscribing a room
        // socket.on('subscribe-room', (data) => {

        //     socket.room = data
        //     socket.join(socket.room);

        // })

        //create a new chat Room
        // socket.on('create-room', (data) => {

        //     data['roomId'] = shortid.generate()

        //     // event to save room.

        //     eventEmitter.emit('save-room', data);

        //     myIo.emit(data.receiverId, data)

        // })

        // socket.on('typing', (userData) => {

        //     socket.to("Global").broadcast.emit('typing-user', userData);

        // });

    });

}


// database operations are kept outside of socket.io code.

// saving Notifys to database.
eventEmitter.on('save-notify', (data) => {

    // let today = Date.now();

    let newNotify = new NotifyModel({

        notifyId: data.notifyId,
        senderName: data.senderName,
        senderId: data.senderId,
        receiverName: data.receiverName || '',
        receiverId: data.receiverId || '',
        message: data.message,
        createdOn: data.createdOn

    });

    newNotify.save((err, result) => {
        if (err) {
            console.log(`error occurred: ${err}`);
        }
        else if (result == undefined || result == null || result == "") {
            console.log("Notify Is Not Saved.");
        }
        else {
            console.log("Notify Saved.");
        }
    });

}); // end of saving chat.


//to save the room
// eventEmitter.on('save-room', (data) => {

//     let newRoom = new RoomModel({

//         roomId: data.roomId,
//         roomName: data.roomName,
//         members: data.members,
//         active: true,
//         admin: data.admin,
//         createdOn: time.now()
//     })

//     newRoom.save((err, result) => {
//         if (err) {
//             console.log(`error occurred: ${err}`);
//         }
//         else if (result == undefined || result == null || result == "") {
//             console.log("Room Is Not Saved.");
//         }
//         else {
//             console.log("Room Saved.");
//         }
//     });

// });



module.exports = {
    setServer: setServer
}
