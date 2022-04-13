// // document.querySelector("body").addEventListener("click",createElements())

// document.onclick = createElements();
// function createElements(){
//     var randNumber = Math.floor(Math.random() * 5);
//     console.log(randNumber)
// }
var windowHeight =  window.innerHeight;
document.getElementById("bodyDiv").style.height = windowHeight+"px";
var randBgColor = Math.floor(Math.random()*255)
document.getElementById("bodyDiv").style.backgroundColor = "rgb("+randBgColor +", "+ randBgColor+", "+randBgColor+ ")";


//document.getElementById("bodyDiv").addEventListener("click", myFunction);

//function myFunction() {
  //var randomElements = Math.floor(Math.random()*3);
  //for(i=0;i<3;i++){
      //const para= document.createElement("p");
      //para.innerHTML = "this is a para";
  //}
//}
