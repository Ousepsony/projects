
var randBgColor = Math.floor(Math.random()*255)
document.body.style.backgroundColor = "rgb("+randBgColor +", "+ randBgColor+", "+randBgColor+ ")";


window.addEventListener("click", createElements);

function createElements(){
  console.log("clicked");
  this.newElement = document.createElement("div");
  this.newElement.innerHTML = "";
  this.newElement.setAttribute("class","elements")

  document.body.appendChild(this.newElement);
}

