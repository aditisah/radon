const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
   name: String,
   balance:{
       type: Number,
       default: 100
   },
   addres: String,
   age: Number,
   gender: {
        type: String,
        enum: ["male", "female", "Other"]
    },
    isFreeAppUser:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('newuser', userSchema) //users