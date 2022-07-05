const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    val1=  req.body.val1;
    val2 = req.body.val2;
    console.log(req.body.val1);
    res.send(val1+val2)
})

app.listen(3000,function(){
    console.log("Server started!")
})