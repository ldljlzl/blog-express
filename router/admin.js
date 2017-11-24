const express=require('express')
const User=require('../model/user')

let router=express.Router()

router.get('/', function(req, res,next) {
    res.render('admin',{msg:'进入管理员页面成功'})
    next()
})




router.get('/category', function(req, res,next) {
    
    // _res=res
    // User.find(function(err,res){
    //     _res.render('admin/users',{users:res,page_index:req.query.page})
    // })
})

module.exports=router