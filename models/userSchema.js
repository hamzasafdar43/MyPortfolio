const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mesg:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("message" , userSchema)
module.exports = userModel