const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    authkey:{
        type:String,
        required:true
    }
    ,
    date:{
        type:Date,
        default:Date.now
    }

});
mongoose.models={}
const user = mongoose.model('login',userSchema);
module.exports = user