var tile = document.getElementById("tile");
var dot = document.getElementById("dot");
var header = document.getElementById("header");

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
var n = 1;
var isInset = "";
window.addEventListener("click",isClickedOne);
function isClickedOne(){
    isClicked(window)
    function isClicked(window){
        n += 1;

    }
}
function mouseMoveChange(event){
    if(n%2==0){
        isInset = "inset ";
        header.innerHTML = "Inset";
    }
    if(n%2==1){
        isInset = "";
        header.innerHTML = "Outset";
    }
    // console.log(isInset)
    var mouseX =  event.clientX;
    var mouseY = event.clientY;
    dot.style.top = mouseY-250 + "px";
    dot.style.left = mouseX-250 + "px";
    
    var ww = window.innerWidth;
    var wh = window.innerHeight;


    var propX = mouseX-(window.innerWidth /2);
    var propY = (mouseY-(window.innerHeight /2));


    propX = propX/10;
    propY =propY/10;
    
    if(propX>0 && propY > 0){
        
    }
    var tileBS =isInset + propX + "px " + propY + "px "+ "60"+"px #ffffff";
    var tileBS2 =isInset +  -1*(propX) + "px " + -1*(propY) + "px "+ "60"+"px #bebebe";
    
    tile.style.boxShadow = tileBS+","+tileBS2;
}

