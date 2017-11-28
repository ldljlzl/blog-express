const express=require('express')
const path=require('path')
const process=require('process')
const User=require(path.join(process.cwd(),'/model/user'))
const Article=require(path.join(process.cwd(),'/model/article'))


let router=express.Router()

router.get('/',function(req,res,next){

    _res=res
    Article.find(function(err,res){
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
            console.log('111111111111111111111111111111')
            console.log(res)
            console.log('111111111111111111111111111111')
            _res.render('admin/article',{articles:res,page_index:req.query.page})
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

module.exports=router