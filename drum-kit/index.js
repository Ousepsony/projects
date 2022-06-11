<<<<<<< HEAD
x= document.querySelectorAll(".drum").length;
for (i in document.querySelectorAll(".drum").length){
    console.log(document.querySelectorAll(".drum")[i])
    document.querySelectorAll(".drum")[i].addEventListener("click",clickFunction);
=======
var gameState =0;
var score = 0;
var globalScope ={};



window.setInterval(getMouseCoords(),1000)
function getMouseCoords (event){
    globalScope.clientX = event.clientX;
    globalScope.clientY = event.clientY;
};

console.log(globalScope.clientX,globalScope.clientY)
if(gameState ===0){
    // var element = 
    // document.createElement("button");
    // element.innerHTML = "test";
    // document.body.appendChild(element)
    
}

if(gameState === 1){
    
   self = this;
    
>>>>>>> 0a454e08274c87edcfd4aab44a5aaaaaf25d5bb6
}

var clickFunction = function(){
    console.log("click");
}