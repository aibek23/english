const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  testName:{type: String, required: true},
  size : {type: String, required: true},
  mistakes : {type: String, required: true},
  user: {type: Types.ObjectId, ref: 'User'},
  date: {type: Date, default: Date.now}
})

module.exports = model('Progress', schema);