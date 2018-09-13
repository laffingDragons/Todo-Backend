let appConfig = {};
let nodeMailer = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://akshay:akshay12@ds145562.mlab.com:45562/todoapp'
    // uri: 'mongodb://localhost:27017/todo'
  }
appConfig.apiVersion = '/api/v1';

nodeMailer.email="cooldudeakshu@gmail.com";
nodeMailer.password = "Mlg@420^";

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion,
    email: nodeMailer.email,
    password: nodeMailer.password
};