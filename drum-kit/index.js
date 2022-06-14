// for(let i = 0; i<=document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
// }

// function clicked(){
//     console.log("clicked")
// }

//higher order fucntion test

function add(x,y){
    
    return x+y
}
function subtract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}

function calculator(num1,num2, operation){
    return(operation(num1,num2))
}