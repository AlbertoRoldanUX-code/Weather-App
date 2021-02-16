const express = require("express");
const https = require("https");
require("dotenv").config();

const app = express();


app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Malaga&units=metric&appid=" + process.env.API_KEY;

  https.get(url, function(response){
    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      res.send("The temperature in Málaga is " + temp + " degrees Celsius.")
    })
  })

})







app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
