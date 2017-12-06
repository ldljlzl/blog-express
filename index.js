const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
let app=express()

app.engine('jade', require('jade').__express)
app.set('view engine','jade')
app.set('views',path.join(__dirname,'views'))

app.use('/public',express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended:false}))

//
app.use(cookieParser())


app.use('/',require('./router/index'))
app.use('/api',require('./router/api'))

app.use('/admin',function(req,res,next){
    console.log(req.cookies)
    if(!req.cookies.hasOwnProperty('userinfo')){
        res.send('您还没登陆，不能进入管理员页面')
        next()
    }else if(!req.cookies.userinfo.isAdmin){
        res.send('您不是管理员，不能进入管理员页面')
        next()
    }else{
        next()
    }
})
app.use('/admin',require('./router/admin'))
app.use('/admin/users',require('./router/admin/users'))
app.use('/admin/article',require('./router/admin/article'))
app.use('/admin/category',require('./router/admin/category'))



mongoose.connect('mongodb://localhost:28017/blog',function(err){
    if(err){
        console.log('数据库连接失败')
    }
    else{
        console.log('mongodb连接成功')
    }
})




app.listen(3000)
