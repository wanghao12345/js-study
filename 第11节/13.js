/*
* fs.readFile(filename, options, callback) 异步读取一个文件的全部内容
*
* callback:
*      err:
*      data: 数据
*
* */

var fs = require('fs');

fs.readFile('3.txt', function (err, data) {
  if (err) {
    console.log('文件读取错误');
  } else {
    console.log(data.toString()); // china-good
  }
})
