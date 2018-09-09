
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let historySchema = new Schema({

    historyId: { type: String, unique: true, required: true },
    usersFriends: [{ type: String, default:''}],
    data:{ type: String, default:''},
    createdOn:{type:Date, default: Date.now()}

})

mongoose.model('History', historySchema)
