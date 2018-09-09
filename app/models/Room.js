const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const time = require('../libs/timeLib');

let roomSchema = new Schema({
  roomId: {
    type: String,
    default: '',
    unique: true
  },
  roomName: {
    type: String,
    default: ''
  },
  members:[{ type: String, ref: 'User' }],
  requested:[{ type: String, ref: 'User' }],
  active:{
      type: Boolean,
      default: true
  },
  admin:{
    type: String,
    default: '',
    ref:'User'
},
  createdOn:{
      type: Date,
      default: time.now()
  }

})


mongoose.model('Room', roomSchema);