const fs = require('fs');
const path = require('path');
// 1.定义正则表达式
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.先读取文件
fs.readFile(path.join(__dirname, '../08-jQuery被卷去的头部 - 副本.html'),'utf8',function(err,dataStr){
    if(err){
        return console.log('获取文件失败')
    }
    // resolveCss(dataStr)
    // resolveJS(dataStr)
    resolveHtml(dataStr)
})

/* // 2.设置处理css的方法
function resolveCss(htmlStr){
    let r1 = regStyle.exec(htmlStr)
    // 2.1替换数据的开头标签内容
    let newJs = r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'./files/index.css'),newJs,function(err){if (ree) {
        return console.log('获取数据失败')
    }
    })
    console.log('获取数据成功');
}

// 3.设置处理js的方法
function resolveJS(htmlStr){
    let r2 =regScript.exec(htmlStr);
    let newjs = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./files/index.js'),newjs,function(err){
        if(err){
            console.log('获取数据失败');
        }
        console.log('获取数据成功');
    })
} */
// 4.设置处理html的方法
function resolve Html(htmlStr){
    // 4.1将原文件的css和js替换成嵌入式的方法
    const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regScript,'<script src="./index.js"></script>')
    // 4.2 写入新生成的文件
    fs.writeFile(path.join(__dirname,'./files/index.html'),newHtml,function(err){
        if (err){
            console.log('写入文件失败');
        }
        console.log('写入文件成功');
    })
}