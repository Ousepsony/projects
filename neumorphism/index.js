var globalScope = {};

// window.addEventListener("mousemove",mouseMoveChange);
// var n = 1;
// var isInset = "";
// window.addEventListener("click",isClickedOne);
// function isClickedOne(){
//     isClicked(window)
//     function isClicked(window){
//         n += 1;

//     }
// }
// function mouseMoveChange(event){
//     if(n%2==0){
//         globalScope.isInset = "inset ";
//         header.innerHTML = "Inset";
//     }
//     if(n%2==1){
//         isInset = "";
//         header.innerHTML = "Outset";
//     }
//     // console.log(isInset)
//     var mX =  event.clientX;
//     var mY = event.clientY;
//     dot.style.top = mY-250 + "px";
//     dot.style.left = mX-250 + "px";
//     var propX = mX-(window.innerWidth /2);
//     var propY = (mY-(window.innerHeight /2));


//     propX = propX/10;
//     propY =propY/10;
    
//     if(propX>0 && propY > 0){
        
//     }
//     var tileBS =isInset + propX + "px " + propY + "px "+ "60"+"px #ffffff";
//     var tileBS2 =isInset +  -1*(propX) + "px " + -1*(propY) + "px "+ "60"+"px #bebebe";
    
//     tile.style.boxShadow = tileBS+","+tileBS2;
// }
globalScope.counter = 0;
globalScope.isInset = false;





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

window.addEventListener("mousemove",moven);
function moven(event){
   applyStyles("element",globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10)
}

window.addEventListener("click",clicked);
function clicked(){
    // console.log(globalScope.mouseX,globalScope.mouseY);

    if (globalScope.counter%2 == 1){
        applyStyles("element",globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10);
        
        globalScope.counter +=1;
        globalScope.isInset =false;
    }
    if (globalScope.counter%2 == 0){
        applyStyles("element",globalScope.isInset,globalScope.mouseX,globalScope.mouseY,10);
        globalScope.isInset =true;
        globalScope.counter +=1;
    }
}