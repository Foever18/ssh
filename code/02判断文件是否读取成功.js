const fs = require('fs')

fs.readFile('./files/12.txt','utf8',function(err,dataStr){
    if(err) {
      return console.log('文件获取失败'+err.message);
    }console.log('文件获取成功'+dataStr);
})