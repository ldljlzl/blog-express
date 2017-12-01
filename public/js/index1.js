$(function(){
    $("div.register").hide()

    // 登录
    $("div.signin button.signin").click(function(){
        let account=$("div.account input.signin").val()
        let password=$("div.password input.signin").val()
        $.post("/api/signin",{
            account:account,
            password:password
        },function(data,status){
            if(data.msg=='登录成功'){
                $("div.signin").hide()
                $("div.userInfoShow").show()
                $("div.userInfo span").html(data.username)
                location.reload()
            }
        })
    })

    //退出登录
    $("div.logout a").click(function(){
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