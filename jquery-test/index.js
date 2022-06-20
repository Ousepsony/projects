$(".test").css("color","rgb(245,145,45)");
$(".test").html("<i>hello</i>")

console.log($("h1").attr("class"))

$('h1').click(function(){
    // $('h1').css("color","black")
})

$(window).keypress(function(event){
    // $('h1').text(event.key)
})
$(window).on("keypress",function(){
    $('h1').sildeDown();
})
