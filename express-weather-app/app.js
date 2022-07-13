const express = require("express")
const https = require("https")
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
     res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var cityName = req.body.cityName;
    var units  = "imperial";
    const apiKey = "76f8e7de2a38fb1b4eaf6e4eaada5903";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units="+units+"&appid="+apiKey;


    https.get(url, function(response){
        console.log(response.statusCode)
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log(weatherData.weather[0].description);
            const icon = weatherData.weather[0].icon;
            const imageURL ="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1> The temperature in "+weatherData.name+" is " +temp +" </h1> ")
            res.write("<h1> Currently, " +weatherData.weather[0].description +" </h1> ");
            res.write('<img src="'+imageURL+'"></img>')
            res.send()
        })
    })
    
})


app.listen(3000,function(){
    console.log("Server started on port 3000")
})