const mongoose = require('mongoose');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')

const NotifyModel = mongoose.model('Notify');

// getting Notification by user id
let getNotifyById = (req, res) => {

    NotifyModel.find({ 'receiverId': req.params.userId })
    .select('-__v -_id')
    .limit(10)
    .sort({createdOn: -1})
    .lean()
    .exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'NotifyController: getSingleNotify', 10)
            let apiResponse = response.generate(true, 'Failed To Find Notify Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No Notify Found', 'NotifyController:getSingleNotify')
            let apiResponse = response.generate(true, 'No Notify Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'Notify Details Found', 200, result)
            res.send(apiResponse)
        }
    })


}


module.exports = {

    getNotifyById : getNotifyById,

}