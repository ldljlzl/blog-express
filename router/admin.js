const express=require('express')
const User=require('../model/user')

let router=express.Router()

router.get('/', function(req, res,next) {
    res.render('admin',{msg:'进入管理员页面成功'})
    next()
})

router.get('/users', function(req, res,next) {
    _res=res
    User.find(function(err,res){
        if(!req.query.page)
        {
            req.query.page=1
        }
        _res.render('admin/users',{users:res,page_index:req.query.page})
    })
})

router.post('/users/save',function(req,res){
    let oldAccount=req.body.oldAccount
    let account=req.body.account
    let password=req.body.password
    let isAdmin
    if(req.body.isAdmin=='true'){
        isAdmin=true
    }else{
        isAdmin=false
    }
    let _res=res


    User.findOne({account:account},function(err,res){
        if(err){
            console.log("error: "+err)
            _res.send('查找是否是已注册账号失败')
            return
        }
        else
        {
            if(!res){
                User.update({'account':oldAccount},{'account':account,'password':password,'isAdmin':isAdmin},function(err,res){
                    if(err){
                        console.log('err:'+err)
                    }else{
                        console.log(res)
                        _res.send('已更新该条用户信息')
                        return
                    }
                })
                return
            }
            else{
                _res.send('此账号已存在')
                return
            }
        }
    })
})

router.get('/category', function(req, res,next) {
    
    // _res=res
    // User.find(function(err,res){
    //     _res.render('admin/users',{users:res,page_index:req.query.page})
    // })
})

module.exports=router