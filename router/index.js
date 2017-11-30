const express=require('express')
const path=require('path')
const process=require('process')
const Article=require(path.join(process.cwd(),'/model/article'))
const Category=require(path.join(process.cwd(),'/model/category'))

let router=express.Router()



router.get('/', function(req, res,next) {
    _res=res
    res.render('index1')

    // let myCategory
    // let article
    // Category.find(function(err,res){
    //     if(err){
    //         console.log('分类查找数据库失败')
    //         _res.send('分类查找数据库失败')
    //         return
    //     }else{
    //         myCategory=res
    //         Article.find(function(err,res){
    //             if(err){
    //                 console.log('文章查找数据库失败')
    //                 _res.send('文章查找数据库失败')
    //                 return
    //             }else{
    //                 article=res
    //                 if(req.cookies.userinfo){
    //                     _res.render('index1',{
    //                         username:req.cookies.userinfo.username,
    //                         article:article,
    //                         category:myCategory
    //                     })
    //                 }
    //                 else{
    //                     _res.render('index1',{
    //                         article:article,
    //                         category:myCategory  
    //                     })
    //                 }
    //             }
    //         })
    //     }
    // })
})




module.exports=router