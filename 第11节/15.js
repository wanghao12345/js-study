/*
* fs.rename(oldPath, newPath, callback) 重命名
* oldPath: 老名字
* newPath: 新名字
* callback:
*     err:
* */

var fs = require('fs');

fs.rename('2-new.txt', '2-new.txt', function (err) {
  if (err) {
    console.log('重命名失败');
  } else {
    console.log('重命名成功');
  }
});
