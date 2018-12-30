//import mongodb module using keyword require
//const MongoClient = require('mongodb').MongoClient;
//another way
const {MongoClient,ObjectID}=require('mongodb');
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
//to Array is cursor method
    db.collection('Todos').find({
     //  name:'arr'
    _id:new ObjectID('5c288a45bb08a403d73e5724')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("unable ",err);
    })
    // db.collection('Todos').find({}).count().then((count)=>{
    //        console.log(`Todos count: ${count}`);
    //     //     console.log(JSON.stringify(docs,undefined,2));
    //      },(err)=>{
    //  console.log("unable ",err);
    //      })
    // db.collection('users').find({name:'arr'}).toArray.then(docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2))
    // }
});
