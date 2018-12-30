const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},(err,db)=>{
    if(err){
        return console.log("unable to connect mongodb server");
    }
    console.log("connected to server");
    db.close();
});
