var fs = require("fs");
var axios = require("axios")
var url= "https://jsonplaceholder.typicode.com/todos/1"
axios.get(url)
.then((response)=>{
   // console.log(response)


    fs.writeFile("input.text",JSON.stringify(response.data,null,2),(err)=>{
        if (err) throw err;
        console.log("file created");
    }) 
})