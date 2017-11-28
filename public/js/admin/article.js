$(function(){
    $("button.addArticle").click(function(){
        let title=$("input.titleArticle").val()
        let author=$("input.authorArticle").val()
        let date=new Date()
        let content=$("textarea.contentArticle").val()
        $.post('/admin/article/addArticle',{
            title:title,
            author:author,
            date:date,
            content:content
        },function(data){           
            alert(data.msg)
            if(data.status===2){
                location.reload()
            }
        })
    })
})