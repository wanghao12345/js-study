
/*
* fs.openSync(path, flags, [mode]) 同步打开文件
*
* path: 要打开的文件路劲
* flags: 打开文件的方式  读/写
* mode: 设置文件的模式 读/写/执行
* */

// 引入 fs 核心模块
var fs = require('fs');

var fd = fs.openSync('1.txt', 'r');
console.log(fd); // 3
