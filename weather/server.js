//axios is a module which is used to fetch data from url
var axios = require("axios");

//yargs is a module which is used to fetch data from user
var argv = require("yargs").argv;

//api_key is a variable which store the api key
//api used from https://openweathermap.org
var api_key = "ad0b1d9d136a39f5ac7e65a38450b746";

//city is a variable which store the user input and if user input is wrong then bydefault india will be consider 
var city = argv.cityname || "india";

//url is a variable that stores full url where data is stored according to specific country
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`;

//.get is a method to fetch client request from url
axios.get(url)
//.then is a method which give response or error by considering future results
      .then(res=>{
 //print my required output         
           console.log(`weather of ${city} is ${res.data.main.temp}`);
       })
//if there is error then catch block print the error
      .catch(error=>{
           console.log(error);
       });