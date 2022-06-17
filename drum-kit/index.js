for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}
for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("keyup",pressed);;
}
function clicked(event) {

    var audio = new Audio("sounds/"+this.name+".mp3");
    audio.play();
    this.style.animate()
};
