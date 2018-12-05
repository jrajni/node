var fs=require('fs');
var argv=require('yargs').argv;

//fs.readFile("table.txt",'table',err=>{
  //  if(err)throw console.err;
//})
var table = argv.n;
for(var i=1;i<=10;i++){
    var tab = table*i;
console.log(`${table}*${i}=${tab}`);
fs.writeFile("table.txt",tab,(err)=>{
    if(err)throw console.err;
    //console.log("table");
    
})
}
