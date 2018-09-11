const express = require('express');
const router = express.Router();
const taskController = require("./../../app/controllers/taskController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/task`;


    app.get(`${baseUrl}/all`, auth.isAuthorized, taskController.getAllTask);
    
    app.get(`${baseUrl}/:taskId/details`, auth.isAuthorized, taskController.getSingleTask);
    
    app.put(`${baseUrl}/:taskId/edit`, auth.isAuthorized, taskController.editTask);
    
    app.post(`${baseUrl}/:taskId/delete`, auth.isAuthorized, taskController.deleteTask);

    app.post(`${baseUrl}/create`, auth.isAuthorized, taskController.createTask);
   
    app.get(`${baseUrl}/:userId/undo`, auth.isAuthorized, taskController.undoTask);
    
   }