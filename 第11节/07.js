/*
* fs.read(fd, buffer, offset, length, position, callback)
*
* fd: 通过open方法成功打开一个文件返回的编号
* buffer: buffer对象
* offset: 偏移量(放到buffer的开始位置)
* length: 添加到buffer中的内容长度
* position: 当前文件里面的位置
* callback: 回调
*           err:
*           bytesRead: 返回buf的长度
*           buffer: 返回的buf
*
*
* */

// 引入 fs 核心模块
var fs = require('fs');

fs.open('1.txt', 'r', function (err, fd) {
  if (err) {
    console.log('文件打开失败');
  } else {

    // 读取文件
    var bf1 = new Buffer(10);
    console.log(bf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
    fs.read(fd, bf1, 0, 4, null, function (err, bytesRead, buffer) {
      console.log(bf1); // <Buffer 61 62 63 64 00 00 00 00 00 00>
      console.log(bytesRead); // 4
      console.log(buffer); // <Buffer 61 62 63 64 00 00 00 00 00 00>
    })
  }
});




































