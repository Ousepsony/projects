var globalScope = {};
var lightshadow = "#ffffff";
var darkshadow = "#bebebe";
globalScope.counter = 0;
globalScope.isInset = false;
globalScope.insetText="";
window.addEventListener("mousemove",moven);
function moven(event){
    globalScope.mouseX = event.clientX;
    globalScope.mouseY =  event.clientY;
   applyStyles(globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10);
}
window.addEventListener("click",clicked);
function clicked(){
    if(globalScope.counter % 2 === 1){
        globalScope.insetText  = "inset ";
        applyStyles(globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10);
        globalScope.counter +=1;
    }
    else if (globalScope.counter % 2 ===0){
        globalScope.insetText ="";
        applyStyles(globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10);
        globalScope.counter += 1;
    }
}

function applyStyles(insetValue,mouseX, mouseY,dividend){
    var intraDividend = 10
    var propX = mouseX-(window.innerWidth /2);
    var propY = (mouseY-(window.innerHeight /2));    
    var insideTag =  document.getElementsByClassName("element");
    var tileBS =globalScope.insetText+ (propX/intraDividend) + "px " + (propY/intraDividend) + "px "+ "60"+"px " + lightshadow ;
    var tileBS2 =globalScope.insetText+  -1*((propX/intraDividend)) + "px " + -1*((propY/intraDividend)) + "px "+ "60"+"px " + darkshadow;
    dot.style.top =mouseY - 250 + "px";
    dot.style.left = mouseX - 250 + "px";
    for(i=0; i<insideTag.length; i++) {
        insideTag[i].style.boxShadow = tileBS+","+tileBS2;
      }
}