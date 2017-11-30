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
    $("a.category").click(function(){
        let category=$(this).text()
        $("div.btn-group button.category").text(category)
    })
    $("img.delete").click(function(){
        if(confirm('是否要从数据库中删除该文章？')){
            let title=$(this).parent().siblings('td.title').text()
            $.post('/admin/article/delete',{title},function(data){
                alert(data)
                location.reload()
            })
        }
    })
})