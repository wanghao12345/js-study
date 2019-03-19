/*
* fs.stat(filename, callback) 获取文件信息
*
* filename: 文件
* callback: 回调
*
* */

var fs = require('fs');

fs.stat('2-new.txt', function () {
  console.log(arguments);
});
