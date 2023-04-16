const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  phnumber: {type: String, required: true},
  surname: {type: String, required: true},
  username: { type: String, required: true},
  date: {type: Date, default: Date.now}
})

module.exports = model('User', schema)
