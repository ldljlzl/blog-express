module.exports={
    checkNotLogin:function checkNotLogin(req,res,next){
        if(!req.session.user){
            req.flash('msg','未登录')
            return res.redirect('/signin')
        }
        next()
    },
    checkLogin:function checkLogin(req,res,next){
        if(req.session.user){
            req.flash('msg','已登录')
            return res.redirect('back')
        }
        next()
    }
}