/**
 * module dependencies
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

let notifySchema = new Schema({

  notifyId: { type: String, unique: true, required: true },
  senderName: { type: String, default: '' },
  senderId: { type: String, default: '' },
  receiverName: { type: String, default: '' },
  receiverId: [{ type: String, default: '' }],
  message: { type: String, default: '' },
  seen: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now }

})

mongoose.model('Notify', notifySchema)
