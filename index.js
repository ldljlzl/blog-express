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
app.use('/admin',require('./router/admin'))
app.use('/admin/users',require('./router/admin/users'))
app.use('/admin/article',require('./router/admin/article'))


mongoose.connect('mongodb://localhost:28017/blog',function(err){
    if(err){
        console.log('数据库连接失败')
    }
    else{
        console.log('mongodb连接成功')
    }
})



// app.use('/',indexRouter)
// app.use('/user',userRouter)
app.listen(3000)
