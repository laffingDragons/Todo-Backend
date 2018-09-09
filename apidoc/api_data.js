define({ "api": [
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/count/unseen",
    "title": "to get count of unseen messages.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"unseen chat count found.\",\n  \"status\": 200,\n  \"data\": 5\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatCountUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/find/unseen",
    "title": "to get paginated unseen chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"chat found and listed.\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"seen\": false,\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"seen\": false,\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatFindUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/group",
    "title": "to get paginated chats of group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Group Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"String\",\n      \"modifiedOn\": \"Date\",\n      \"createdOn\": \"Date\",\n      \"message\": \"String\",\n      \"senderId\": \"String\",\n      \"senderName\": \"String\",\n      \"chatRoom\": \"String\"\n    },\n    {\n      \"chatId\": \"String\",\n      \"modifiedOn\": \"Date\",\n      \"createdOn\": \"Date\",\n      \"message\": \"String\",\n      \"senderId\": \"String\",\n      \"senderName\": \"String\",\n      \"chatRoom\": \"String\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForGroup"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/user",
    "title": "to get paginated chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId receiving user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForUser"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/unseen/user/list",
    "title": "to get user list of unseen chats.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/chat.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatUnseenUserList"
  },
  {
    "type": "get",
    "url": "/api/v1/room/all",
    "title": "Get all Rooms",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"All Room Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                    \"active\": \"Boolean\",\n                    \"requested\": object(type = array),\n                    \"members\":object(type = array),\n                    \"roomName\": \"String\",\n                    \"roomId\": \"String\",\n                },\n         ..............\n         ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Room Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "GetApiV1RoomAll"
  },
  {
    "type": "get",
    "url": "/api/v1/room/:roomId/details",
    "title": "Get Room by Id",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Room Details Found\",\n    \"status\": 200,\n    \"data\": {\n                   \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                   \"active\": \"Boolean\",\n                   \"requested\": object(type = array),\n                   \"members\":object(type = array),\n                   \"roomName\": \"String\",\n                   \"roomId\": \"String\",\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Room Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "GetApiV1RoomRoomidDetails"
  },
  {
    "type": "post",
    "url": "/api/v1/room/invite",
    "title": "Invitation mail",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomName",
            "description": "<p>Room name of the room. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email id of the person to whom the mail is to sent. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the room. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the member who will be sending the invitation. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Email sent successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Email Does not met the requirement\",\n  \"status\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "PostApiV1RoomInvite"
  },
  {
    "type": "put",
    "url": "/api/v1/room/:roomId/addUserToRoom",
    "title": "Add Users to Room",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "members",
            "description": "<p>Array of userId which is to be added to room. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Users Added to room Successfully\",\n    \"status\": 200,\n    \"data\": {\n                   \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                   \"active\": \"Boolean\",\n                   \"requested\": object(type = array),\n                   \"members\":object(type = array),\n                   \"roomName\": \"String\",\n                   \"roomId\": \"String\",\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To add members Room \",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "PutApiV1RoomRoomidAddusertoroom"
  },
  {
    "type": "put",
    "url": "/api/v1/room/:roomId/editRoomName",
    "title": "Edit room name",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomName",
            "description": "<p>Room name of the room. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Room details edited\",\n    \"status\": 200,\n    \"data\": {\n                   \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                   \"active\": \"Boolean\",\n                   \"requested\": object(type = array),\n                   \"members\":object(type = array),\n                   \"roomName\": \"String\",\n                   \"roomId\": \"String\",\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit Room name\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "PutApiV1RoomRoomidEditroomname"
  },
  {
    "type": "put",
    "url": "/api/v1/room/:roomId/removeUser",
    "title": "Remove User from Room",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "members",
            "description": "<p>UserId which is to be reomoved from room. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Failed To remove user from room\",\n    \"status\": 200,\n    \"data\": {\n                   \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                   \"active\": \"Boolean\",\n                   \"requested\": object(type = array),\n                   \"members\":object(type = array),\n                   \"roomName\": \"String\",\n                   \"roomId\": \"String\",\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Left the room successfully\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "PutApiV1RoomRoomidRemoveuser"
  },
  {
    "type": "put",
    "url": "/api/v1/room/:roomId/removeUserFromRequested",
    "title": "Remove User from Requested",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requested",
            "description": "<p>UserId which is to be removed From requested array. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User request has Declined\",\n    \"status\": 200,\n    \"data\": {\n                   \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                   \"active\": \"Boolean\",\n                   \"requested\": object(type = array),\n                   \"members\":object(type = array),\n                   \"roomName\": \"String\",\n                   \"roomId\": \"String\",\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To remove user from Requested\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "PutApiV1RoomRoomidRemoveuserfromrequested"
  },
  {
    "type": "put",
    "url": "/api/v1/room/:roomId/request",
    "title": "Request for Room",
    "group": "room",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "requested",
            "description": "<p>User Id in requested array. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "roomId",
            "description": "<p>Room Id of the room. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Successfully sent request to join chatroom\",\n    \"status\": 200,\n    \"data\": {\n                   \"createdOn\": \"Date\",\n                   \"admin\": \"String\",\n                   \"active\": \"Boolean\",\n                   \"requested\": object(type = array),\n                   \"members\":object(type = array),\n                   \"roomName\": \"String\",\n                   \"roomId\": \"String\",\n                }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Request\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/room.js",
    "groupTitle": "room",
    "name": "PutApiV1RoomRoomidRequest"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "User detail",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n             \"createdOn\": \"Date\",\n             \"mobileNumber\": \"Number\",\n             \"email\": \"String\",\n             \"lastName\": \"String\",\n             \"firstName\": \"String\",\n             \"userId\": \"String\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find User Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgot-password",
    "title": "Forgot password",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Sending recovery mail. Please check your email.\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Email does not exist\",\n  \"status\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersForgotPassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Login Successful\",\n\t\t\"status\": 200,\n\t\t\"data\":  {\n               \"authToken\": \"String\",\n               \"userDetails\": {\n                   \"mobileNumber\": \"Number\",\n                   \"email\": \"String\",\n                   \"lastName\": \"String\",\n                   \"firstName\": \"String\",\n                   \"userId\": \"String\",\n               }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Error in Login\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Logged Out Successfully\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"error occured\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n       \"authToken\": \"String\",\n        \"userDetails\": {\n        \"createdOn\":\"Date\",    \n        \"mobileNumber\": \"String\",\n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Create User\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "Delete",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Deleted the user successfully\",\n   \"status\": 200,\n   \"data\":{\n            \"createdOn\":\"Date\",    \n            \"mobileNumber\": \"String\",\n            \"email\": \"String\",\n            \"lastName\": \"String\",\n            \"firstName\": \"String\",\n            \"userId\": \"String\"\n          }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To delete user\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/view/all",
    "title": "View all users",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"All User Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n                 {\n                       \"createdOn\": \"Date\",\n                       \"mobileNumber\": \"Number\",\n                       \"email\": \"String\",\n                       \"lastName\": \"String\",\n                       \"firstName\": \"String\",\n                       \"userId\": \"String\",\n                 }\n               ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find User Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersViewAll"
  },
  {
    "type": "put",
    "url": "/api/v1/users/change-password",
    "title": "Change password",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n             \"createdOn\": \"Date\",\n             \"mobileNumber\": \"Number\",\n             \"email\": \"String\",\n             \"lastName\": \"String\",\n             \"firstName\": \"String\",\n             \"userId\": \"String\"\n            }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit user details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersChangePassword"
  },
  {
    "type": "put",
    "url": "/api/v1/users/:userId/edit",
    "title": "Edit",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n       \"authToken\": \"String\",\n        \"userDetails\": {\n        \"createdOn\":\"Date\",    \n        \"mobileNumber\": \"String\",\n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit user details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUseridEdit"
  }
] });
