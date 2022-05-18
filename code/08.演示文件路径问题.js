const fs = require('fs');
fs.readFile(__dirname+'/files/3.txt','utf8',function(err,dataStr){
    if(err) {
        return console.log('获取文件失败')
    }console.log('获取文件成功');
})                               
    