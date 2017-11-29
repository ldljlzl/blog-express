const mongoose=require('mongoose')
const path=require('path')


let CategorySchema= new mongoose.Schema({
    nameCategory:String,
    articles:[String]
})

module.exports=mongoose.model('category',CategorySchema)