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
    
}

