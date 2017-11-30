const express=require('express')
const path=require('path')
const process=require('process')
const User=require(path.join(process.cwd(),'/model/user'))
const Article=require(path.join(process.cwd(),'/model/article'))
const Category=require(path.join(process.cwd(),'/model/category'))

let router=express.Router()

router.get('/',function(req,res,next){
    _res=res
    let category
    Category.find(function(err,res){
        if(err){
            console.log('分类查找数据库失败')
            _res.send('分类查找数据库失败')
            return
        }else{
            category=res
        }
    })
    Article.find(function(err,res){
        if(err){
            console.log('文章查找数据库失败')
            _res.send('文章查找数据库失败')
            return
        }
        else{
            if(!req.query.page)
            {
                req.query.page=1
            }
            _res.render('admin/article',{
                articles:res,
                page_index:req.query.page,
                category:category
            })
            return
        }
        
    })
})

router.post('/addArticle',function(req,res){
    let title=req.body.title
    let author=req.body.author
    let date=req.body.date
    let content=req.body.content
    let _res=res
    User.findOne({account:author},function(err,res){
        if(err){
            console.log('err:'+err)
            _res.send({status:0,msg:'查找数据库失败'})
            return
        }else{
            if(!res){
                _res.send({status:1,msg:'该用户不存在'})
                return
            }
            else{
                let article=new Article({
                    title:title,
                    author:author,
                    date:date,
                    content:content
                })
                article.save(function(err,res){
                    if(err){
                        console.log('err:'+err)
                        _res.send({status:0,msg:'连接数据库失败'})
                        return
                    }else{
                        console.log("res:" + res)
                        _res.send({status:2,msg:'提交文章成功'})
                        return
                    }
                })
            }
            console.log('到了这个return  1111111111111111111')
            return
        }
    })
})

router.post('/delete',function(req,res){
    let title=req.body.title
    _res=res
    Article.remove({title:title},function(err,res){
        if(err){
            console.log('err:'+err)
            _res.send('查找数据库失败')
            return
        }else{
            _res.send('成功删除该文章')
            return
        }
    })
})

module.exports=router