const express=require('express')
const User=require('../model/user')
let router=express.Router()

router.post('/register',function(req,res,next){
    let account=req.body.account
    let password=req.body.password
    let _res=res
    User.findOne({account:account},function(err,res){
        if(err){
            console.log("error: "+err)
            _res.send({status:0,msg:'查找是否是已注册账号失败'})
            return
        }
        else{
            if(!res){
                let user=new User({
                    account:account,
                    password:password
                })
                user.save(function(err,res){
                    if(err){
                        console.log('存入数据失败')
                        _res.send({status:1,msg:'存入数据失败'})
                        return
                    }
                    else{
                        console.log('存入数据成功')
                        _res.send({status:2,msg:'存入数据成功'})
                        return
                    }
                })
            }
            else{
                console.log('已经存在该账号')     
                console.log("res: "+res)
                _res.send({status:3,msg:'已经存在该账号'})    
                return 
            }
        }
    })
})
router.post('/signin',function(req,res,next){
    let account=req.body.account
    let password=req.body.password
    let _res=res
    User.findOne({account:account,password:password},function(err,res){
        if(err){
            console.log("error: "+err)
            _res.send('用户名或密码错误')
            return
        }
        else{
            _res.cookie('userinfo',{username:account},{expires:new Date(Date.now()+60*60*24*7)})
            _res.send({msg:'登录成功',username:account})
            return
        }
    })
})

router.get('/clearCookies',function(req,res){
    res.clearCookie('userinfo')
    res.send('退出用户成功')
    return
})


module.exports=router