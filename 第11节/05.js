/*
* FileSystem 文件系统
*
* 该模块是核心模块,需要使用require导入后使用
* 该模块提供了操作文件的一些API
*/


/*
* fs.open(path, flags, [mode], callback) 异步打开文件
*
* path: 要打开的文件路劲
* flags: 打开文件的方式  读/写
* mode: 设置文件的模式 读/写/执行
* callback: 回调
*      err: 文件打开失败的错误保存在err里面,如果成功err为null
*      fd: 被打开文件的标识
* */

// 引入 fs 核心模块
var fs = require('fs');

// 1.打开一个存在的文件

fs.open('1.txt', 'r', function (err, fd) {
  console.log(err); // null
  console.log(fd); // 3
});

// 2.打开一个不存在的文件

fs.open('2-new.txt', 'r', function (err, fd) {
  console.log(err); // 返回错误对象
  console.log(fd); // undefined
});

























