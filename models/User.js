const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
    name:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required:true
    },

    industry:{
        type:String,
        required:true
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);