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

router.post('/addUser',function(req,res){
    let account=req.body.account
    let password=req.body.password
    let isAdmin=(req.body.isAdmin==='false'?false:true)
    
    _res=res
    let user=new User({
        account:account,
        password:password,
        isAdmin:isAdmin
    })
    user.save(function(err,res){
        if(err){
            console.log('err:'+err)
            _res.send({status:0,msg:'连接数据库失败'})
            return
        }else{
            console.log("res:" + res)
            _res.send({status:1,msg:'存入用户数据成功'})
            return
        }
    })

})

//检查账户是否被注册
router.post('/checkAccount',function(req,res){
    let account=req.body.account
    _res=res
    User.findOne({account:account},function(err,res){
        if(err){
            console.log('err:'+err)
            _res.send({status:0,msg:''})
            return
        }else{
            if(!res){
                _res.send({status:1,msg:''})
                return
            }
            else{
                _res.send({status:2,msg:'该用户名已被注册'})
                return
            }
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
    let isAdmin=(req.body.isAdmin==='false'?false:true)

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