const fs = require('fs');
fs.writeFile('f:./files/3.txt','nihao1',function(err, data) {
    console.log(err);
})

console.log();