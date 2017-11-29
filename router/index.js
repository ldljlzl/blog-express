const express=require('express')

let router=express.Router()

router.get('/', function(req, res,next) {
    if(req.cookies.userinfo){
        res.render('index1',{username:req.cookies.userinfo.username})
    }
    else{
        res.render('index1')
    }
    next()
})

// router.use('/',registerRouter)


module.exports=router