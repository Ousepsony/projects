var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var self = this;

btn1.addEventListener("click",loadBtn1)

function loadBtn1(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","data/data.txt",true);


    xhr.onload = function () {
        if(this.status == 200){
            var text = this.responseText;
            console.log(text)

            document.getElementsByClassName("content").innerHTML = "<h1>" + text + "</h1>";
        }
    }

    xhr.send();
}