const fs =require("fs");
fs.readFile('./files/111.txt','utf8',function(err,dataStr){
    console.log(err);
    console.log('-----------');
    console.log(dataStr);
    console.log(111);
    console.log(dataStr);
})