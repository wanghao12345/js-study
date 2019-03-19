/*
* fs.appendFile(path, data, option, callback)
*
* path: 文件名或文件描述符
* data: 添加数据
* option:
*     encoding:
*     mode:
*     flag:
*  callback:
*     err:
*
* 注意: 文件不存在,即创建
* */

var fs = require('fs');

fs.appendFile('2-new.txt', '-very-good', function (err) {
  console.log(err); // null
});
