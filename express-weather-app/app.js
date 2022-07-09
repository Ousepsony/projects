const express = require("express")
const https = require("https")
const app = express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=76f8e7de2a38fb1b4eaf6e4eaada5903"
    https.get(url, function(response){
        console.log(response.statusCode)
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.feels_like;
            console.log(weatherData.weather[0].description)
        })
    })
    res.send("server is on mate")
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
})