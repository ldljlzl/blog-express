$(function(){
    let oldAccount
    $("td.textEdit").hide()
    $("img.edit").click(function(){
        $(this).parent().hide()
        $(this).parent().siblings('td.text').hide()
        $(this).parent().siblings('td.textEdit').show()
        oldAccount=$(this).parent().siblings('td.account').children('input').val()
    })
    $('img.delete').click(function(){
        if(confirm('是否要从数据库中删除该用户？')){
            let account=$(this).parent().siblings('td.accountShow').text()
            $.post('/admin/users/delete',{account:account},function(data){
                alert(data)
                location.reload()
            })
        }
    })
    $("a.dropMenu").click(function(){
        $("div.isAdminText").text($(this).text())  
    })
    $("img.save").click(function(){
        let account=$(this).parent().siblings('td.account').children('input').val()
        let password=$(this).parent().siblings('td.password').children('input').val()
        let isAdmin=$(this).parent().siblings('td.isAdmin ').children('div.isAdminText').text()
        $.post('/admin/users/save',{
            oldAccount:oldAccount,
            account:account,
            password:password,
            isAdmin:isAdmin
        },function(data){
            alert(data)
            location.reload()
        })
    })

    //添加新用户，检查该账户是否被注册
    //status=0 查找数据库失败；status=1 该用户名没被注册 ；status=2该用户名已被注册
    $('div.addUser input.account').keydown(function(){
        _this=this
        let interval=setInterval(function(){
            
            $.post('/admin/users/checkAccount',{account:$(_this).val()},function(data){
                if(data.status==2){
                    $(_this).siblings('div.alert')[0].style.display='inline'
                    $(_this).siblings('div.alert').children('span').text(data.msg)
                }
                else{
                    $(_this).siblings('div.alert')[0].style.display='none'
                }  
            })
            clearInterval(interval)
        },500)

        
    })
})
