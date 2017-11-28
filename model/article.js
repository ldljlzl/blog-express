const mongoose=require('mongoose')

let ArticleSchema= new mongoose.Schema({
    title:String,
    author:String,
    date:Date,
    content:String
})

module.exports=mongoose.model('Article',ArticleSchema)