$(function(){
    //从文章列表中删除该文章
    $("img.delete").click(function(){
        if(confirm('是否要从数据库中删除该文章？')){
            let title=$(this).parent().siblings('td.title').text()
            $.post('/admin/article/delete',{title},function(data){
                alert(data)
                location.reload()
            })
        }
    })

    //选择分类
    $("a.category").click(function(){
        let category=$(this).text()
        $("div.btn-group button.category").text(category)
    })

    $("div.beTitle").click(function(){
        let lzl=document.execCommand("delete", false)
        alert(lzl)
        // alert(document.selection.createRange())

        // if($(this).hasClass("active")){
        //     $(this).removeClass("active")
        //     $(this).css("color","black")
        //     $("div.articleDiv").css("font-size","20px")
        // }else{
        //     $(this).css("color","#31b0d5")
        //     $(this).addClass("active")
        //     $("div.articleDiv").css("font-size","40px")
        // }
        
    })


    //添加文章
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