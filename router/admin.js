const express=require('express')
const User=require('../model/user')

let router=express.Router()

router.get('/', function(req, res,next) {
        res.render('admin',{msg:'进入管理员页面成功'})
        next()    
})




module.exports=router