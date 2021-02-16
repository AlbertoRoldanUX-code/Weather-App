const express = require("express");
const https = require("https");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")


})

app.post("/", function(req, res){
  res.send("Thanks for posting that!")
})


// const query = "London";
// const unit = "metric";
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + process.env.API_KEY;
//
// https.get(url, function(response){
//   response.on("data", function(data){
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const description = weatherData.weather[0].description;
//     const icon = weatherData.weather[0].icon
//     const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//     res.write("<p>The weather is currently " + description + "</p>");
//     res.write("<h1>The temperature in Malaga is " + temp + " degrees Celsius.</h1>");
//     res.write("<img src=" + imageURL + ">");
//     res.send()
//   })
// })







app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
