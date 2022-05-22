var globalScope = {};
globalScope.counter = 0;
globalScope.isInset = false;


globalScope.insetText;


function applyStyles(className,insetValue,mouseX, mouseY,dividend){
    
    var tileBS =globalScope.insetText+ (mouseX/dividend) + "px " + (mouseY/dividend) + "px "+ "60"+"px #ffffff";
    var tileBS2 =globalScope.insetText+  -1*((mouseY/dividend)) + "px " + -1*((mouseY/dividend)) + "px "+ "60"+"px #bebebe";

    var tileBS =globalScope.insetText + (mouseX / dividend) + "px " + (mouseY/dividend) + "px "+ "60"+"px #ffffff";
    var tileBS2 =globalScope.insetText +  -1*(mouseX/dividend) + "px " + -1*(mouseY/dividend) + "px "+ "60"+"px #bebebe";


    // console.warn(tileBS,tileBS2)
    dot.style.top = mouseX-250 + "px";
    dot.style.left = mouseY-250 + "px";
    tile.style.boxShadow = tileBS+","+tileBS2;
}

window.addEventListener("mousemove",moven);
function moven(event){
    globalScope.mouseX = event.clientX;
    globalScope.mouseY =  event.clientY;
   applyStyles("element",globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10)
}

window.addEventListener("click",clicked);
function clicked(){
    console.log(globalScope.mouseX,globalScope.mouseY);

    if(globalScope.inset==true){
        globalScope.insetText =  "inset "
        globalScope.inset=false;

    }
    else if(globalScope.inset ==  false){
        globalScope.insetText="";
        globalScope.inset = true;
    }
}
