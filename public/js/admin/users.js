$(function(){
    $("td.textEdit").hide()
    $("img.edit").click(function(){
        $(this).parent().hide()
        $(this).parent().siblings('td.text').hide()
        $(this).parent().siblings('td.textEdit').show()
    })
    $("a.dropMenu").click(function(){
        $("div.isAdminText").text($(this).text())  
    })
    $("img.save").click(function(){

        $(this).parent().hide()
        $(this).parent().siblings('td.text').hide()
        $(this).parent().siblings('td.textEdit').show()
    })
})
