//import express module and store it in exp variable
var exp = require('express');
//make object of express
var app = exp();
//to fetch client request from home page there is use of get command
app.get('/home',(req,res)=>{//req->request that client did to server 
    res.send('this is my first server');//and res is response that server respond to client using .send method
});
//another page named as aboutme
app.get('/aboutme',(req,res)=>{
    //it will redirect user to home page again
    res.redirect('/home');
});
//your prog first listen this port no in localhost
app.listen(3000,()=>{
    //simply print the string on console
    console.log("done");
});