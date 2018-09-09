const bcrypt = require('bcrypt');
const saltRounds = 10;

// custom libray
let logger = require('../libs/loggerLib');

let hashPassword = (myPlainTextPassword) => {

    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(myPlainTextPassword, salt);
    return hash;

}

// Compare password Async
let comparePassword = (oldPassword, hashpassword, cb) => {

    bcrypt.compare(oldPassword, hashpassword, (err, res) =>{
        if(err){
            logger.error(err.message, "Comparison Error", 5);
            cb(err, null);
        }else{
            cb(null, res);
        }
    })
}


// Compare password sync
let comparePasswordSync = (myPlainTextPassword, hash) => {

    return bcrypt.compareSync(myPlainTextPassword, hash);

}


module.exports = {

    hashPassword: hashPassword,
    comparePassword: comparePassword

}