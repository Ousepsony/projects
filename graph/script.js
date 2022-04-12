var htmlBody = document.querySelector("body");


function generateColours(){
    var rgbR= Math.floor(Math.random() * (255) + 0);
    var rgbG= Math.floor(Math.random() * (255) + 0);
    var rgbB= Math.floor(Math.random() * (255) + 0);
    var bgColor = "rgb"+"("+rgbR+","+" "+rgbG+","+" "+rgbB+")"
    console.log(bgColor);
    htmlBody.style.backgroundColor = bgColor;
}
document.addEventListener('load',generateColours())