1. var app=express()
//回调函数中req为incomingmessage类，常用参数可详见express文档request部分

2.//安装supervisor， supervisor --harmony index 命令热更新，其中index.js为进入文件

3.// C:\Program Files\MongoDB\Server\3.4\bin>mongod --dbpath=C:\Users\Administrator\b
// log-express\db --port=28017
// 开启数据库连接，C:\Program Files\MongoDB为mongodb安装路径，--dbpath为设置数据库位置，--port设置端口（默认为27017）

4.$(function(){
    //jquery代码，如:
    //$.get(URL,callback)
    //$.post(URL,data,callback);
})
//jquery的引入要在head标签下（预先加载）
//其他script文件要在body尾部载入（不然获取不到html元素）

5.
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

6.AJAX
    1)jQuery
        $.get(URL,callback)
        $.post(URL,data,callback)
        例如：
        $("button").click(function(){
            $.post("demo_test_post.asp",
            {
                name:"Donald Duck",
                city:"Duckburg"
            },
            function(data,status){
                alert("Data: " + data + "\nStatus: " + status);
            });
        });
    2)原生xmlhttp
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            alert(this.responseText)
        }
    }
    let formData = new FormData();
    formData.append('account',account)
    formData.append('password',password)
    xmlhttp.open("POST","/register",true);
    xmlhttp.send(formData);


7.cookies和session，分别用cookie-parser和express-session


8.最好全用jquery操作
$("img.edit").click(function(e){
    $(this).parent().prev()[0].style.color='red'
})
// 1.$(this)  指代点击的元素
// 2.$(this).parent()或者prev()等等，要加[0]，否则显示Cannot set property 'color' of undefined
// 3.e 代表event事件本身
// 4. 最好改用 $(this).parent().prev('.....').css({"color":"red","fontSize":"30px"})

9.三种对话框
//1.alert
//2.confirm('.....')  是否对话框
//3.let text=prompt('输入账号','placeholder....')


10.样式表优先级
//1.内联>嵌入式>外部
//2.内联样式表的权值最高 1000；ID 选择器的权值为 100;Class 类选择器的权值为 10;HTML 标签选择器的权值为1。如 .a .b .c{}  的权值为30
//3.内联样式  div(style='width:50%')


11.==与===的区别
https://www.zhihu.com/question/31442029

12.js是异步的
    let myCategory=[]
    Category.find(function(err,res){
        if(err){
            console.log('分类查找数据库失败')
            _res.send('分类查找数据库失败')
            return
        }else{
            myCategory=res
        }
    })
    console.log(myCategory) // undefined
    //因为js是异步的，数据库的值还没有传给myCategory

13._res.cookie('userinfo',{username:account,isAdmin:true},{expires:new Date(Date.now()+60*60*24*1000)})
                    
60*60*24*1000单位为ms