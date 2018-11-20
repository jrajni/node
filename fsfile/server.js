var fs = require("fs");
var lyrics ="i am writing this lyrics to understand concept of fs module"
fs.writeFile("myfile.txt",lyrics,(err)=>{
    if (err) throw err;
    console.log("lyrics saved");
    
});