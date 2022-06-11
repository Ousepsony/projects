for(let i = 0; i<=document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked)
}

function clicked(){
    console.log("clicked")
}