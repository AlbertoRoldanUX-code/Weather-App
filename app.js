const express = require("express");
const https = require("https");
require("dotenv").config();
console.log(process.env);

const app = express();


app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Malaga&units=metric&appid=" + process.env.API_KEY;

  https.get(url, function(response){
    console.log(response.statusCode);
  })

  res.send("Server is up and running");
})







app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
