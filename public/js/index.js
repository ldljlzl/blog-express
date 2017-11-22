// document.getElementById('register').onclick=function(){
//     alert('lzl')
// }
$(function(){
    $("button#clearCookies").click(function(){
        $.get('/api/clearCookies',function(msg){
            alert(msg)
            location.reload()
        })
    })
    $("button#toAdmin").click(function(){
        location.href='/admin'
    })
    $("button#toRegister").click(function(){
        //DOM
        // document.getElementById("register").style.display="inline"
        // document.getElementById("signin").style.display="none"
        //jqury的hide()和show()
        // $("div#register").show()
        // $("div#signin").hide()
        //jqury的css选择器
        $("div#register").css("display","inline")
        $("div#signin").css("display","none")
    })
    $("button#toSignin").click(function(){
        $("div#signin").css("display","inline")
        $("div#register").css("display","none")
    })
    $("button#register").click(function(){
        let account=$("input.account").val()
        let password=$("input.password").val()
        // let xmlhttp=new XMLHttpRequest();
        // xmlhttp.onreadystatechange=function()
        // {
        //     if (xmlhttp.readyState==4 && xmlhttp.status==200)
        //     {
        //         alert(this.responseText)
        //     }
        // }
        // let formData = new FormData();
        // formData.append('account',account)
        // formData.append('password',password)
        // xmlhttp.open("POST","/register",true);
        // xmlhttp.send(formData);
        $.post("http://localhost:3000/api/register",{
            account:account,
            password:password
        },function(data){
            $("input.account").val('')
            $("input.password").val('')
            alert(data)
            if((data=='存入数据成功')||(data=='已经存在该账号')){
                $("div#register").hide()
                $("div#signin").show()
            }
        })
    })
    $("button#signin").click(function(){
        let account=$("div#signin input.account").val()
        let password=$("div#signin input.password").val()
        $.post("/api/signin",{
            account:account,
            password:password
        },function(data,status){
            if(data.msg=='登录成功'){
                $("div#signin").hide()
                $("div#user").show()
                $("div#span").html("欢迎"+data.username+"来到我的博客")
            }
        })
    })
})