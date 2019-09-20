let appConfig = {};
let nodeMailer = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://akshay:akshay12@ds213538.mlab.com:13538/ron'
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