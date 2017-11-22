const mongoose=require('mongoose')

let UserSchema= new mongoose.Schema({
    account:String,
    password:String,
    isAdmin:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('User',UserSchema)