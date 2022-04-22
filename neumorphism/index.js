var tile = document.getElementById("tile");
var dot = document.getElementById("dot");

dot.style.top = window.innerHeight/2 - 12.5  + "px";
dot.style.left = window.innerWidth/2 - 12.5  + "px";

tile.style.top = window.innerHeight/2 - 150  + "px";
tile.style.left = window.innerWidth/2 - 150  + "px";

window.addEventListener("resize",resizeElements);
function resizeElements(){
    tile.style.top = window.innerHeight/2 - 150  + "px";
    tile.style.left = window.innerWidth/2 - 150  + "px";   
}

window.addEventListener("mousemove",mouseMoveChange);
function mouseMoveChange(event){
    var mouseX =  event.clientX;
    var mouseY = event.clientY;
    dot.style.top = mouseY-12 + "px";
    dot.style.left = mouseX-12 + "px";
    
    var ww = window.innerWidth;
    var wh = window.innerHeight;


    var propX = mouseX-(window.innerWidth /2);
    var propY = mouseY-(window.innerHeight /2);

    
    console.log(propX,propY)
}
