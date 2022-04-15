
var randBgColor = Math.floor(Math.random()*255)
document.body.style.backgroundColor = "rgb("+Math.floor(Math.random()*255) +", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+ ")";


window.addEventListener("click", createElements);

function createElements(){
  console.log("clicked");
  this.newElement = document.createElement("div");
  this.newElement.innerHTML = "";

  this.newElement.setAttribute("class","elements");

  var randomSeed = Math.floor(Math.random() * (window.innerHeight / 2 ))
  this.newElement.style.minHeight =randomSeed + "px";
  this.newElement.style.maxHeight =randomSeed + "px";
  this.newElement.style.minWidth =randomSeed + "px";
  this.newElement.style.minWidth =randomSeed + "px";
  this.newElement.style.backgroundColor = "rgb("  + (255 - randomSeed) +","+(255 - randomSeed /3) +","+(255 - randomSeed /5)+ ")";
  this.newElement.style.top = Math.floor(Math.random() * (window.innerHeight - randomSeed)) + "px";
  this.newElement.style.left = Math.floor(Math.random() * (window.innerHeight)) + "px";


  document.body.appendChild(this.newElement);
}

