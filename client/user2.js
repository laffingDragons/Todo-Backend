// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkVUZ2sxMXFfeSIsImlhdCI6MTUzMTcyNjIxMDU1OSwiZXhwIjoxNTMxODEyNjEwLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTk5OTU1MjU2MiwiZW1haWwiOiJkdWRlYWtzaHVAZ21haWwuY29tIiwibGFzdE5hbWUiOiJkb2UiLCJmaXJzdE5hbWUiOiJqb2huIiwidXNlcklkIjoiSTFpTEU3a2ZNIn19.m4AX4XhvcDFM0SU7B8g4358ck6nOdw92n9ZlbaHy5fE"
const userId= "I1iLE7kfM"

let chatMessage = {
  createdOn: Date.now(),
  receiverId: 'zSfJO50l0',//putting user2's id here 
  receiverName: "Mr Xyz",
  senderId: userId,
  senderName: "Akshay Patil"
}

let chatSocket = () => {

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });

  socket.on(userId, (data) => {

    console.log("you received a message from "+data.senderName)
    console.log(data.message)

  });

  socket.on("online-user-list", (data) => {

    console.log("Online user list is updated. some user can online or went offline")
    console.log(data)

  });


  $("#send").on('click', function () {

    let messageText = $("#messageToSend").val()
    chatMessage.message = messageText;
    socket.emit("chat-msg",chatMessage)

  })

  $("#messageToSend").on('keypress', function () {

    socket.emit("typing","Aditya Kumar")

  })

  socket.on("typing", (data) => {

    console.log(data+" is typing")
    
    
  });



}// end chat socket function

chatSocket();
