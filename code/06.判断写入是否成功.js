const fs= require('fs')
fs.writeFile('c:./files/3.txt','06判断法外狂徒',function(err,dataStr){
    if(err) {
        return console.log('文件写入失败')
    }console.log('文件写入成功');
})