/*
* fs.close(fd, callback)
*
* fd: 打开的文件
* callback: 回调
*
* 注意: 打开文件操作完毕, 最后需要关闭文件
* */

var fs = require('fs');

fs.open('1.txt', 'r', function (err, fd) {
  // TODO
  fs.close(fd, function () {

  })
});
