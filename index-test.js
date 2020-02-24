// src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"

// var username = "wcalil";

// var queryURL = "https://api.github.com/users/" + username;

// $.ajax({
// url: queryURL,
// method: "GET"
// }).then(function(response)  {

// console.log(response)

// var fs = require("fs");

// fs.appendFile("log.txt", arrayResult + '\n', function (err) {

//     if (err) {
//         console.log(err);

//     }
//     else {
//         console.log("Commit logged!");

//     }

// });

const avatar = require('axios');
var username = wcalil;

axios.get('https://api.github.com/users/wcalil')
  .then(response => {
    console.log(response.avatar_url);x
  })
  .catch(error => {
    console.log(error);
  });