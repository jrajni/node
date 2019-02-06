//import axios module to make https request from node 
var axios = require ("axios");
//url is variable which stores my todolist api
var url= "https://jsonplaceholder.typicode.com/todos/1"
//.get is used to fetch inforamtion that client expect from server
axios.get(url)
//.then is promise method which helps to give response either by resolving or by rejecting and
//give result of asnychronous 
    .then((response)=>{
        //simply print the data of todo list
        console.log(response.data);
    })
    //.catch means if there is eroor in program then it will catch in catch block
    //nd print that error in terminal
    .catch((error)=>{
        console.log(error);
    })
