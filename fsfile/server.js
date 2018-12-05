//fs is variable that imports fs module
var fs = require("fs");
//lyrics is a variable in which written content of text file is written.
var lyrics ="i am writing this lyrics to understand concept of fs module"
//fs variable uses writeFile method having arguments textfile name content variable and error if any
fs.writeFile("myfile.txt",lyrics,(err)=>{
    //if there is error throw error
    if (err) throw err;
    //output your required output
    console.log("lyrics saved");
    
});
