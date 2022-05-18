const path = require('path')
const pathStr = path.join(__dirname,'./files/2.txt')
const fs = require('fs')
console.log(pathStr);
fs.readFile(pathStr, 'utf8',function(err, data) {
    if (err) {
        return console.log('获取文件失败');
    }
    console.log(data);
})