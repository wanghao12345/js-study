/*
* fs.unlink(path, callback) 删除指定文件
*
* callback:
*     err
* */

var fs = require('fs');

fs.unlink('3.txt', function (err) {
  if (err) {
    console.log('删除失败');
  } else {
    console.log('删除成功');
  }
})
