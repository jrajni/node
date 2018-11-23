//fs is variable in which fs module imports
var fs = require("fs");
//axios is a variable in which axios module imports
var axios = require("axios")
//url is a variable in which todo api stored
var url= "https://jsonplaceholder.typicode.com/todos/1"
//axios uses .get method to use url 
axios.get(url)
//.then method is used to get response 
.then((response)=>{
//todo api data is written in textfile using fs module with writeFile method
fs.writeFile("input.text",JSON.stringify(response.data,null,2),(err)=>{
//if there is error then throw        
if (err) throw err;
//print error
        console.log("file created");
    }) 
})
catch((error)=>{
        console.log("saved");
})