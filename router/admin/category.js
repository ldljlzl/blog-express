const express=require('express')
const path=require('path')
const process=require('process')
const Category=require(path.join(process.cwd(),'/model/category'))

let router=express.Router()

router.get('/', function(req,res) {
    _res=res
    Category.find(function(err,res){
        if(err){
            console.log('查找数据库失败')
            _res.send('查找数据库失败')
            return
        }
        else{
            _res.render('admin/category',{category:res})
            return
        }       
    })   
})

router.post('/addCategory',function(req,res){
    let nameCategory=req.body.nameCategory
    _res=res
    Category.findOne({nameCategory:nameCategory},function(err,res){
        if(err){
            console.log('err:'+err)
            _res.send({status:0,msg:'查找数据库失败'})
            return
        }else{
            if(res){
                _res.send({status:1,msg:'该分类已经存在'})
                return
            }
            else{
                let category=new Category({
                    nameCategory:nameCategory,
                    articles:[]
                })
                category.save(function(err,res){
                    if(err){
                        console.log('err:'+err)
                        _res.send({status:0,msg:'查找数据库失败'})
                        return
                    }else{
                        console.log("res:" + res)
                        _res.send({status:2,msg:'添加分类成功'})
                        return
                    }
                })
            }
            console.log('到了这个return  1111111111111111111')
            return
        }
    })
})
module.exports=router