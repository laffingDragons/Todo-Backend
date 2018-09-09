// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Ilhjdm8zczhRNyIsImlhdCI6MTUzMTcyNjA0MTYxOSwiZXhwIjoxNTMxODEyNDQxLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTk5OTU1NTYyLCJlbWFpbCI6ImNvb2xkdWRlYWtzaHVAZ21haWwuY29tIiwibGFzdE5hbWUiOiJQYXRpbCIsImZpcnN0TmFtZSI6IkFrc2hheSIsInVzZXJJZCI6InpTZkpPNTBsMCJ9fQ.qxHOOiGRnTeVmwKvYZzki8Zj9W533Gf5mw4lf5YqpSA"
const userId = "zSfJO50l0"

let chatMessage = {
  createdOn: Date.now(),
  receiverId: 'I1iLE7kfM',//putting user2's id here 
  receiverName: "Akshay Patil",
  senderId: userId,
  senderName: "Mr Xyz"
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

  socket.on("typing", (data) => {

    console.log(data+" is typing")
    
    
  });

  $("#send").on('click', function () {

    let messageText = $("#messageToSend").val()
    chatMessage.message = messageText;
    socket.emit("chat-msg",chatMessage)

  })

  $("#messageToSend").on('keypress', function () {

    socket.emit("typing","Mr Xyz")

  })




}// end chat socket function

chatSocket();
