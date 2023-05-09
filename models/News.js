const {Schema, model, Types} = require('mongoose')

const News = new Schema({
  image : {type: String, required: true},
  title:{type: String, required: true},
  description : {type: String, required: true},
  content:{type: String, required: true},
  author:{type: String, required: true},
  comments:{type: Types.ObjectId, ref: 'Comments'},
  date: {type: Date, default: Date.now}
})

module.exports = model('News', News)