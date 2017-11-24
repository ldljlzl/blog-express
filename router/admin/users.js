const express=require('express')
const path=require('path')
const process=require('process')
const User=require(path.join(process.cwd(),'/model/user'))

let router=express.Router()

router.get('/', function(req, res,next) {   
    _res=res
    User.find(function(err,res){
        if(err){
            console.log('查找数据库失败')
            _res.send('查找数据库失败')
            return
        }
        else{
            if(!req.query.page)
            {
                req.query.page=1
            }
            _res.render('admin/users',{users:res,page_index:req.query.page})
            return
        }
        
    })
    
})


router.post('/delete',function(req,res){
    let account=req.body.account
    _res=res
    User.remove({account:account},function(err,res){
        if(err){
            console.log('err:'+err)
            _res.send('查找数据库失败')
            return
        }else{
            _res.send('成功删除该用户')
            return
        }
    })
})

router.post('/save',function(req,res){
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

module.exports=router