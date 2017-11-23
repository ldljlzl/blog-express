$(function(){
    let oldAccount
    $("td.textEdit").hide()
    $("img.edit").click(function(){
        $(this).parent().hide()
        $(this).parent().siblings('td.text').hide()
        $(this).parent().siblings('td.textEdit').show()
        oldAccount=$(this).parent().siblings('td.account').children('input').val()
    })
    $("a.dropMenu").click(function(){
        $("div.isAdminText").text($(this).text())  
    })
    $("img.save").click(function(){
        let _this=this
        
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
})
