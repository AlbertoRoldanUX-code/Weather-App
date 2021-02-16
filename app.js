const express = require("express");
const https = require("https");

const app = express();

var mykey = config.MY_KEY;

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Malaga&units=metric&appid=" + mykey;

  https.get(url, function(response){
    console.log(response);
  })

  res.send("Hello World!");
})







app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
