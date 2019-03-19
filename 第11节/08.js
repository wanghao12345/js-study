/*
* fs.write(fd, buffer, offset, length, position, callback)
*
* fd: 打开的文件
* buffer: 要写入的数据
* offset: buffer对象中要写入的数据的起始位置
* length: 要写入的buffer数据的长度
* position: fd中的起始位置
* callback: 回调
*         err: 错误提示
*         bytesWritten: 写入的字节数
*         buffer: 返回写入的buffer
*
* */


// 引入 fs 核心模块
var fs = require('fs');

fs.open('1.txt', 'r+', function (err, fd) {
  if (err) {
    console.log('打开文件失败')
  } else {
    var bf = Buffer.from('123');
    fs.write(fd, bf, 0, 2, 10, function (err, bytesWritten, buffer) {
      console.log(err); // null
      console.log(bytesWritten); // 2
      console.log(buffer); // <Buffer 31 32 33>
    })
  }
});
