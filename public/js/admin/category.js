$(function(){
    $("button.addCategory").click(function(){
        let nameCategory=$("input.addCategory").val()
        $.post('/admin/category/addCategory',{
            nameCategory:nameCategory
        },function(data){
            alert(data.msg)
            if(data.status===2){
                location.reload()
            }
        })
    })
    


    //默认展示第一个分类文章列表 
    $("div.head li:first").addClass("active")

    //点击某个分类，就展示该分类的文章列表
    $("a.head").click(function(){
        $("div.head li").attr('class','')
        $(this).parent().attr('class','active')
    })
})