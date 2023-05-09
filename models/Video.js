const {Schema, model, Types} = require('mongoose')

const Video = new Schema({
  image : {type: String, required: true},
  title:{type: String, required: true},
  description : {type: String, required: true},
  content:{type: String, required: true},
  author:{type: String, required: true},
  comments:{type: Types.ObjectId, ref: 'CommentsVideo'},
  date: {type: Date, default: Date.now}
})

module.exports = model('Video', Video)