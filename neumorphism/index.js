var globalScope = {};

globalScope.counter = 0;
globalScope.isInset = false;


globalScope.insetText="";



<<<<<<< HEAD
function applyStyles(className,insetValue,mouseX, mouseY,dividend){
    var inset;
    if(insetValue==true){
        inset="inset";
        

    }
    var tileBS =inset +" "+ (mouseX/dividend) + "px " + (mouseY/dividend) + "px "+ "60"+"px #ffffff";
    var tileBS2 =inset +" "+  -1*((mouseX/dividend)) + "px " + -1*((mouseY/dividend)) + "px "+ "60"+"px #bebebe";
    console.log(tileBS,tileBS2)
    dot.style.top = mouseX-250 + "px";
    dot.style.left = mouseY-250 + "px";
    
    tile.style.boxShadow = tileBS+","+tileBS2;
}
=======
>>>>>>> 3409c82756c5594532593bdf2ecb93f67d06af4c

window.addEventListener("mousemove",moven);
function moven(event){
    globalScope.mouseX = event.clientX;
    globalScope.mouseY =  event.clientY;
   applyStyles(globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10);
//    globalScope.insetText = globalScope.insetText;    
//    console.log(globalScope.mouseX,globalScope.mouseY);
   
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

    var propX = mouseX-(window.innerWidth /2);
    var propY = (mouseY-(window.innerHeight /2));    
    var insideTag =  document.getElementsByClassName("element");

    var tileBS =globalScope.insetText+ (propX/dividend) + "px " + (propY/dividend) + "px "+ "60"+"px #ffffff";
    var tileBS2 =globalScope.insetText+  -1*((propX/dividend)) + "px " + -1*((propY/dividend)) + "px "+ "60"+"px #bebebe";
    dot.style.top =mouseY - 250 + "px";
    dot.style.left = mouseX - 250 + "px";
    for(i=0; i<insideTag.length; i++) {
        insideTag[i].style.boxShadow = tileBS+","+tileBS2;
      }
}
