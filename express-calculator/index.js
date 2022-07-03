const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
// app.get("/",function(req,res){
//     res.sendFile(`${__dirname}/index.html`)
// })
app.get("/bmi",function(req,res){
    res.sendFile(`${__dirname}/bmi.html`)
})
// app.post("/",function(req,res){
//     console.log(req.body.num1,req.body.num2)
//     var num1 = Number(req.body.num1);
//     var num2= Number(req.body.num2);
//     var result = num1 + num2;
//     res.send("The result of calculation is  " + result)
// })

app.post("/bmi",function(req,res){
    console.log(req.body.num1,req.body.num2)
    var n1 = Number(req.body.num1);
    var n2= Number(req.body.num2);
    var result = n1 / (n2**2);
    res.send("BMI is  " + result)
})


app.listen(3000, function(){
    console.log("server started on 3000")
})