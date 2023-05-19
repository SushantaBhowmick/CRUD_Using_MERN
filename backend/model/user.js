const mongoose  = require("mongoose");
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter Your Name"],
        maxlength:[30,"can't exceed 30charaters"],
        minlength:[4,"Name Should bemore than 4 charaters"]
    },
    email:{
        type: String,
        required:[true,"Please Enter Your Name"],
        unique:true,
        validate:[validator.isEmail]
    },
    age:{
        type:Number,
        required:[true,"please Enter YOur Age"],

    },
    clgName:{
        type:String,
        required:[true,"please Enter Your Collage Name"],

    },
    department:{
        type:String,
        required:[true,"please Enter Your Deepartment"],
    },
    role:{
        type:String,
        default:"user",
    },
})

module.exports =mongoose.model('User',userSchema);