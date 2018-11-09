var exp = require('express');
var app = exp();
app.get('/home',(req,res)=>{
    res.send('this is my first server');
});
app.get('/aboutme',(req,res)=>{
    res.redirect('/home');
});
app.listen(3000,()=>{
    console.log("done");
});