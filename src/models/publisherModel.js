const mongoose = require('mongoose');

const publisherSchema = mongoose.Schema({
    name: String,
    headQuarter: String
})

module.exports = mongoose.model('newPublisher',publisherSchema);