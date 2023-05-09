const {Schema, model, Types} = require('mongoose')

const Comments = new Schema({
  Comments:{type: Types.ObjectId, ref: 'News'},
  userid:{type: Types.ObjectId, ref: 'User'},
  userName: {type: String, required: true},
  date: {type: Date, default: Date.now}
})

module.exports = model('Comments', Comments)