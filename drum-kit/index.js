for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
}
window.addEventListener("keyup",function (e) {
    if(e.code==="KeyF"){
        console.log("clicked")
    }
});



function clicked(){
    console.log("sounds/"+this.name+".mp3");
    var audio = new Audio("sounds/"+this.name+".mp3");
    audio.play();
}

// document.addEventListener('keydown', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }