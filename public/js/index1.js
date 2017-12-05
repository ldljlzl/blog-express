$(function(){
    $("div.register").hide()

    // 登录
    //status:0,msg:'查找数据库失败';status:1,msg:'登录成功'
    //status:2,msg:'管理员登录成功';status:3,msg:'账号或密码错误'
    $("div.signin button.signin").click(function(){
        let account=$("div.account input.signin").val()
        let password=$("div.password input.signin").val()
        $.post("/api/signin",{
            account:account,
            password:password
        },function(data){
            alert(data.msg)
            location.reload()
        })
    })

    //退出登录
    $("div.logout button").click(function(){
        $.get('/api/clearCookies',function(msg){
            alert(msg)
            location.reload()
        })
    })

    //去注册界面
    $("div.toRegister a").click(function(){
        $("div.register").show()
        $("div.signin").hide()    
    })
    //去登录界面
    $("div.toSignin a").click(function(){
        $("div.register").hide()
        $("div.signin").show()    
    })

    //注册
    //status:0,msg:'查找是否是已注册账号失败';status:1,msg:'存入数据失败'
    //status:2,msg:'存入数据成功';status:3,msg:'已经存在该账号'
    $("div.register button.register").click(function(){
        let account=$("div.register input.account").val()
        let password=$("div.register input.password").val()
        let passwordAgain=$("div.register input.passwordAgain").val()
        if(password===passwordAgain){
            $.post("/api/register",{
                account:account,
                password:password
            },function(data){
                $("div.register input.account").val('')
                $("div.register input.password").val('')
                $("div.register input.passwordAgain").val('')
                alert(data.msg)
                if((data.status===2)||(data.status===3)){
                    $("div.register").hide()
                    $("div.signin").show() 
                }
            })
        }else{
            alert('两次密码输入不一致')
        }
            
    })
})