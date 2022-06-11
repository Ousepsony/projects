x= document.querySelectorAll(".drum").length;
for (i in document.querySelectorAll(".drum").length){
    console.log(document.querySelectorAll(".drum")[i])
    document.querySelectorAll(".drum")[i].addEventListener("click",clickFunction);
}

var clickFunction = function(){
    console.log("click");
}