for(let i = 0; i<=document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}
for(let i = 0; i<=document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("keydown",clicked);
}



function clicked(){
    console.log("sounds/"+this.name+".mp3");
    var audio = new Audio("sounds/"+this.name+".mp3");
    audio.play();
}