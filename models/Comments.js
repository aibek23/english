const {Schema, model, Types} = require('mongoose')

const Progress = new Schema({
  Comments:{type: Types.ObjectId, ref: 'News'},
  userid:{type: String, required: true},
  userName: {type: String, required: true},
  date: {type: Date, default: Date.now}
})

module.exports = model('Progress', Progress)