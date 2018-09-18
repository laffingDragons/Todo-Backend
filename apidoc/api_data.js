define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/task/:userId/notification",
    "title": "Get notifications",
    "version": "0.0.1",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Notify Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"notifyId\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"seen\": \"Boolean\",\n                   \"message\": \"String\",\n                   \"receiverId\": Object.type(Array),\n                   \"receiverName\": \"String\",\n                   \"senderId\": \"String\",\n                   \"senderName\": \"String\"\n               },\n              .......\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Notify Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "notification",
    "name": "GetApiV1TaskUseridNotification"
  },
  {
    "type": "get",
    "url": "/api/v1/task/all",
    "title": "View all Tasks",
    "version": "0.0.1",
    "group": "task",
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
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"All Task Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n                 {\n                       \"createdOn\": \"Date\",\n                       \"modifiedOn\": \"Date\",\n                       \"mobileNumber\": \"Number\",\n                       \"createdByUserId\": \"String\",\n                       \"modifiedBy\": \"String\",\n                       \"taskId\": \"String\",\n                       \"tasks\":[\n                                  {\n                                      \"task\":\"String\",\n                                      \"status\":\"String\",\n                                      \"subtask\": Object.type(Array)\n                                      }\n                                  ]\n                 },\n                  ......            \n               ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Task Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "task",
    "name": "GetApiV1TaskAll"
  },
  {
    "type": "get",
    "url": "/api/v1/task/:taskId/details",
    "title": "Get single task details",
    "version": "0.0.1",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The taskId of task for details. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Task Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n                 {\n                       \"createdOn\": \"Date\",\n                       \"modifiedOn\": \"Date\",\n                       \"mobileNumber\": \"Number\",\n                       \"createdByUserId\": \"String\",\n                       \"modifiedBy\": \"String\",\n                       \"taskId\": \"String\",\n                       \"tasks\":[\n                                  {\n                                      \"task\":\"String\",\n                                      \"status\":\"String\",\n                                      \"subtask\": Object.type(Array)\n                                      }\n                                  ]\n                 }\n               ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Task Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "task",
    "name": "GetApiV1TaskTaskidDetails"
  },
  {
    "type": "get",
    "url": "/api/v1/task/:userId/undo",
    "title": "Undo task",
    "version": "0.0.1",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Undo operation successful\",\n\t\t\"status\": 200,\n\t\t\"data\":null\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit Task details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "task",
    "name": "GetApiV1TaskUseridUndo"
  },
  {
    "type": "post",
    "url": "/api/v1/task/create",
    "title": "Create task",
    "version": "0.0.1",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of task. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of task. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tasks",
            "description": "<p>The subtask object of task. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>The name of user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdByUserId",
            "description": "<p>The userId of user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>The userId of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Successfully created new Task\",\n\t\t\"status\": 200,\n\t\t\"data\":null\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed to create new Task\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "task",
    "name": "PostApiV1TaskCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/task/:taskId/delete",
    "title": "Delete task",
    "version": "0.0.1",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The taskId of task for details. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Task deleted successfully\",\n\t\t\"status\": 200,\n\t\t\"data\":null\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To delete Task\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "task",
    "name": "PostApiV1TaskTaskidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/task/:taskId/edit",
    "title": "Edit single task details",
    "version": "0.0.1",
    "group": "task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taskId",
            "description": "<p>The taskId of task for details. (params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of task. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of task. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "tasks",
            "description": "<p>The subtask object of task. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>The userId of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Task details edited\",\n\t\t\"status\": 200,\n\t\t\"data\":null\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit Task details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/task.js",
    "groupTitle": "task",
    "name": "PutApiV1TaskTaskidEdit"
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
          "content": " {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n             \"requested\": Object.type(Array),  \n             \"request\": Object.type(Array),  \n             \"friends\": Object.type(Array),\n             \"createdOn\": \"Date\",\n             \"mobileNumber\": \"Number\",\n             \"email\": \"String\",\n             \"lastName\": \"String\",\n             \"firstName\": \"String\",\n             \"userId\": \"String\"\n    }\n}",
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
    "type": "get",
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
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"All User Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n                 {\n                       \"requested\": Object.type(Array),  \n                       \"request\": Object.type(Array),  \n                       \"friends\": Object.type(Array),\n                       \"createdOn\": \"Date\",\n                       \"mobileNumber\": \"Number\",\n                       \"email\": \"String\",\n                       \"lastName\": \"String\",\n                       \"firstName\": \"String\",\n                       \"userId\": \"String\",\n                 },\n                .......\n               ]\n  }",
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
    "name": "GetApiV1UsersViewAll"
  },
  {
    "type": "post",
    "url": "/api/v1/users/addInvitedFriend",
    "title": "Add invited Friend",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "inviteId",
            "description": "<p>UserId of the user's friend who has invited him to the platform. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>UserId of the user's . (query params) (required)</p>"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Friend added to friends list\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To find User\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersAddinvitedfriend"
  },
  {
    "type": "post",
    "url": "/api/v1/users/findFriend",
    "title": "Find friends",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "friends",
            "description": "<p>Friends array of the user. (Send friends array of the user as body params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"User Friends Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n                 {\n                       \"requested\": Object.type(Array),  \n                       \"request\": Object.type(Array),  \n                       \"friends\": Object.type(Array),\n                       \"createdOn\": \"Date\",\n                       \"mobileNumber\": \"Number\",\n                       \"email\": \"String\",\n                       \"lastName\": \"String\",\n                       \"firstName\": \"String\",\n                       \"userId\": \"String\",\n                 }\n               ]\n  }",
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
    "name": "PostApiV1UsersFindfriend"
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
    "url": "/api/v1/users/invitation",
    "title": "Invitation",
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
            "description": "<p>UserId of the user. (query params) (required)</p>"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Email sent\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To find User\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersInvitation"
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
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Login Successful\",\n\t\t\"status\": 200,\n\t\t\"data\":  {\n               \"authToken\": \"String\",\n               \"userDetails\": {\n                   \"requested\": Object.type(Array),  \n                   \"request\": Object.type(Array),  \n                   \"friends\": Object.type(Array),  \n                   \"mobileNumber\": \"Number\",\n                   \"email\": \"String\",\n                   \"lastName\": \"String\",\n                   \"firstName\": \"String\",\n                   \"userId\": \"String\",\n               }\n  }",
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
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n       \"authToken\": \"String\",\n        \"userDetails\": {\n        \"requested\": Object.type(Array),  \n        \"request\": Object.type(Array),  \n        \"friends\": Object.type(Array),\n        \"createdOn\":\"Date\",    \n        \"mobileNumber\": \"String\",\n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
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
    "url": "/api/v1/users/unFriend",
    "title": "UnFriend",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "friendId",
            "description": "<p>UserId of the user's friend to unfriend. (query params) (required)</p>"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Friend removed from friends list\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To find User\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUnfriend"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Deleted the user successfully\",\n   \"status\": 200,\n   \"data\":{\n            \"requested\": Object.type(Array),  \n            \"request\": Object.type(Array),  \n            \"friends\": Object.type(Array),\n            \"createdOn\":\"Date\",    \n            \"mobileNumber\": \"String\",\n            \"email\": \"String\",\n            \"lastName\": \"String\",\n            \"firstName\": \"String\",\n            \"userId\": \"String\"\n          }\n }",
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
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n             \"requested\": Object.type(Array),  \n             \"request\": Object.type(Array),  \n             \"friends\": Object.type(Array),\n             \"createdOn\": \"Date\",\n             \"mobileNumber\": \"Number\",\n             \"email\": \"String\",\n             \"lastName\": \"String\",\n             \"firstName\": \"String\",\n             \"userId\": \"String\"\n            }\n\n}",
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
    "url": "/api/v1/users/:userId/addAsFriend",
    "title": "Add as Friend",
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
            "field": "request",
            "description": "<p>User Id of the user which is to be added to friend's list. (body params) (required)</p>"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Friend added successfully\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Add To Friends Array\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUseridAddasfriend"
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
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
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
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"String\",\n        \"userDetails\": {\n        \"requested\": Object.type(Array),  \n        \"request\": Object.type(Array),  \n        \"friends\": Object.type(Array),\n        \"createdOn\":\"Date\",    \n        \"mobileNumber\": \"String\",\n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
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
  },
  {
    "type": "put",
    "url": "/api/v1/users/:userId/request",
    "title": "Request",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "request",
            "description": "<p>User Id of the user which is to be requested. (body params) (required)</p>"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Successfully sent request\",\n   \"status\": 200,\n   \"data\": null\n}",
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
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUseridRequest"
  },
  {
    "type": "put",
    "url": "/api/v1/users/:userId/requested",
    "title": "Requested",
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
            "field": "requested",
            "description": "<p>User Id of the user which is to be requested. (body params) (required)</p>"
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
          "content": "{\n   \"error\": false,\n   \"message\": \"Successfully sent request\",\n   \"status\": 200,\n   \"data\": null\n}",
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
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUseridRequested"
  }
] });
