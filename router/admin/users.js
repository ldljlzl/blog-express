const express=require('express')
const path=require('path')
const process=require('process')

const User=require(path.join(process.cwd(),'/model/user'))
console.log(path.join(process.cwd(),'/model/user'))
let router=express.Router()

router.get('/', function(req, res,next) {
    
    _res=res
    User.find(function(err,res){
        console.log('到这里')
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

module.exports=router