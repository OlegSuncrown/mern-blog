const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  article: {
      type: String,
      required: true
  },
  authorname: {
    type: String,
    required: true
}, 
 
}, {
  timestamps: true,
})

module.exports = mongoose.model('Articles', articleSchema)