//import mongodb module using keyword require
const MongoClient = require('mongodb').MongoClient;
//built a connection using url and error & client parameter
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,client)=>{
//if there is error then print unable message    
if(err){
        return console.log("unable to connect mongodb server");
    }
//if no error then print sucess message
    console.log("connected to server");
//2nd parameter was client ..so pass it in variable db in which my databse name is TodoApp where my data will store
    const db = client.db('TodoApp');
//now insert one data using insertOne and is error then print error message or sucess message
    db.collection('Todos').insertOne({
        text:'something to do',
        completed:false
    },(err,result) => {
//if error then print unable to insert
        if(err){
                return console.log("unable to insert todo");
            }
//otherwise print result result having indentation 2
            console.log(JSON.stringify(result.ops,undefined,2));
        
    });
//close is method to close client
    client.close();
});
