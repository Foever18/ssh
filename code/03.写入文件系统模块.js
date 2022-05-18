const fs = require('fs');
fs.writeFile('./files/2.txt','hello,node',function(err,dataStr){
    console.log(err);

})
777