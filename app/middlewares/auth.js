const mongoose = require('mongoose')
const AuthModel = mongoose.model('Auth')
const jwt = require('jsonwebtoken')
const request = require('request')

const token = require('./../libs/tokenLib');
const response = require('./../libs/responseLib');
const check = require('./../libs/checkLib');
const logger = require('./../libs/loggerLib');

let isAuthorized = (req, res, next) => {

    if(req.params.authToken || req.body.authToken || req.query.authToken || req.header('authToken')){
        AuthModel.findOne({ authToken: req.header('authtoken') || req.body.authToken || req.query.authToken || req.params.authToken }, (err, authDetails) =>{
            if(err){

                console.log(err);
                logger.error(err.message, "Error in Authorization Middleware", 10);
                let apiResponse = response.generate(true, "Failed to Authorize", 500, null);
                res.send(apiResponse);

            }else if(check.isEmpty(authDetails)){

                logger.error('No Authorization key Present', 'Authorization milldeware', 10);
                let apiResponse = response.generate(true, "Invalid or Expired Authorization key", 400, null);
                res.send(apiResponse);

            }else{

                token.verifyToken(authDetails.authToken, authDetails.tokenSecret, (err, decoded) =>{
                    if(err){

                        console.log(err);
                        logger.error(err.message, "Error in Authorization Middleware", 10);
                        let apiResponse = response.generate(true, "Failed to Authorize", 500, null);
                        res.send(apiResponse);
        
                    }else{
                        req.user = {userId: decoded.data.userId}
                        next()
                    }

                })

            }//end of verification
        })

    } else {

        let apiResponse = response.generate(true, "AuthToken not Found", 404, null);
        res.send(apiResponse);

    }

}

module.exports= {

    isAuthorized: isAuthorized

}