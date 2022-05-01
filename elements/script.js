var RandBg= "hsla("+0 +", "+0+"%, "+Math.floor(Math.random() * (80) + 79)+ "%,1)";
document.body.style.backgroundColor = RandBg;

window.addEventListener("mousemove",mouseTrack);
function mouseTrack(event){
  console.log("moven");
  document.getElementById("my").style.top =event.clientY +"px";
  document.getElementById("my").style.left =event.clientX + "px";
  
  document.getElementById("others").style.top =event.clientY +"px";
  document.getElementById("others").style.left =event.clientX + "px";
  


  
  // console.log(clXCent,clYCent);

}


window.addEventListener("click", createElements);
 var counter = 0;
function createElements(event){
  document.getElementById("my").style.top =event.clientY +"px";
  document.getElementById("my").style.left =event.clientX + "px";
  document.getElementById("others").style.top =event.clientY +"px";
  document.getElementById("others").style.left =event.clientX + "px";
  if(counter<10){
    var clickRandBg = "hsla("+0 +", "+0+"%, "+Math.floor(Math.random() * (80) + 79)+ "%,1)";
  // document.body.style.backgroundColor = clickRandBg;

  
  var number = Math.floor(Math.random() * 3)
  for(var i = 0;i<= number;i++){
    this.newElement = document.createElement("div");
    this.newElement.innerHTML = "";
  
    this.newElement.setAttribute("class","elements");
  
    var randomSeed = Math.floor(Math.random() * (window.innerHeight))
  
    this.newElement.style.minHeight =randomSeed /3 + "px";
    this.newElement.style.maxHeight =randomSeed /3 + "px";
    this.newElement.style.minWidth =randomSeed /3 + "px";
    this.newElement.style.minWidth =randomSeed /3+ "px";
  
    this.newElement.style.backgroundColor = "hsla("+ Math.floor(Math.random() * 48) +","+ 100 +"%,"+50  +"%,"+ (Math.random() * 0.90 + 0.60) +")";
    // console.log("Element Properties: color:" + this.newElement.style.backgroundColor) 
  
this.newElement.style.top = ((Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * (window.innerHeight-300))))+ "px";
this.newElement.style.left = ((Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * (window.innerWidth-300))))+ "px";
  
    document.getElementById("others").appendChild(this.newElement);
  }
  counter+=1;
  // console.log(counter)
}
var clXCent = event.clientX / window.innerWidth *100;
 var clYCent = event.clientY / window.innerHeight *100;
//   this.newElement.style.transformOrigin =clXCent+"% "+clYCent+"%";

// document.getElementById("others").style.left=event.clientX + "px"
// document.getElementById("others").style.top=event.clientY + "px"
}


// console.log(Math.floor(Math.random() * (window.innerHeight-100))+ "px")
// console.log( Math.floor(Math.random() * (window.innerWidth-100) + -1*((window.innerWidth-100))) + "px")
