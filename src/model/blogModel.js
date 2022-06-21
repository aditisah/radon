const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const blogModel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author_id:{
    type: ObjectId,
    ref: "Author",
    required: true
  },
  tags:{
    type:[String],
    category: String,
    required: true
  },
  subcategory: {
    type: [String]
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isPublished: {
    type: Boolean,
    default: false
  }
},{ timestamps: true })

module.exports.blogModel = blogModel