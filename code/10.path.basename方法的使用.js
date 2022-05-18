const path = require('path')
let str = 'a/b/c/index.html'
let base = path.basename(str,'.html')
let ext =path.extname(str)
console.log(ext);
console.log(base);
