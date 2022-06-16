for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",pressed);
}
for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("keyup",pressed);;
}
function pressed(event) {

    this.style.color = "white";

    if(event.code==="KeyW"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(event.code==="KeyA"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(event.code==="KeyS"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(event.code==="KeyD"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(event.code==="KeyJ"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(event.code==="KeyK"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(event.code==="KeyL"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(event.ClientX != 0){
        var audio = new Audio("sounds/"+this.name+".mp3");
    audio.play();
    
    }
    // setTimeout('', 1000);
    // this.style.color = "#DA0463";
};