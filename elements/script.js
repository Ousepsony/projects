var RandBg= "hsla("+0 +", "+0+"%, "+Math.floor(Math.random() * (80) + 79)+ "%,1)";
document.body.style.backgroundColor = RandBg;


window.addEventListener("click", createElements);
 var counter = 0;
function createElements(){
  if(counter<10){
    var clickRandBg = "hsla("+0 +", "+0+"%, "+Math.floor(Math.random() * (80) + 79)+ "%,1)";
  document.body.style.backgroundColor = clickRandBg;

  
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
    console.log("Element Properties: color:" + this.newElement.style.backgroundColor) 
    this.newElement.style.top = Math.floor(Math.random() * (window.innerHeight - randomSeed)) + "px";
    this.newElement.style.left = Math.floor(Math.random() * (window.innerHeight)) + "px";

    
  
    document.body.appendChild(this.newElement);
  }
  counter+=1;
  console.log(counter)
}
  
}
