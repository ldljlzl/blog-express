const express=require('express')
const path=require('path')
const process=require('process')
const Article=require(path.join(process.cwd(),'/model/article'))
const Category=require(path.join(process.cwd(),'/model/category'))

let router=express.Router()



router.get('/', function(req, res,next) {
    
    // res.render('index1')

    let myCategory
    let article
    let _req=req
    let _res=res
    Category.find(function(err,res){
        if(err){
            console.log('分类查找数据库失败')
            _res.send('分类查找数据库失败')
            return
        }else{
            myCategory=res
            Article.find(function(err,res){
                if(err){
                    console.log('文章查找数据库失败')
                    _res.send('文章查找数据库失败')
                    return
                }else{
                    article=res
                    if(_req.cookies.userinfo){
                        console.log('有userinfo')
                        _res.render('index1',{
                            username:_req.cookies.userinfo.username,
                            article:article,
                            category:myCategory
                        })
                    }
                    else{
                        console.log('没有userinfo')
                        _res.render('index1',{
                            article:article,
                            category:myCategory  
                        })
                    }
                }
            })
        }
    })
})




module.exports=router