'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  mobileNumber: {
    type: String,
    default: 0
  },
  createdOn: {
    type: Date,
    default: Date.now
  },

  friends: [{ type: String }],

  request: [{ type: String }],

  requested: [{ type: String }],


})


mongoose.model('User', userSchema);