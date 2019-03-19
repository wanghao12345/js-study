/*
* fs.writeFile(file, data, options, callback) 给文件写入数据
*
* file: [string] | [Buffer] | [URL] | [integer]文件名或文件描述符
* data: [string] | [Buffer] | [TypedArray] | [DataView]写入数据
* options:
*     encoding: 默认'utf-8'
*     mode: 默认0o666
*     flag: 默认w
* callback:
*     err: 错误提示
*
* 注意: 如果文件不存在,即新建写入
*
* */


var fs = require('fs');

fs.writeFile('2-new.txt', 'china', function (err) {
  console.log(err); // null
});

