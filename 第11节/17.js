/*
* fs.watch(filename, option, listener) 监听文件
*
* listener: 回调函数
*     eventType: 事件
*     filename: 文件
*
* */

var fs = require('fs');

var filename = '2-new.txt';

fs.watch(filename, function (ev, fn) {
  console.log(ev);

  if (fn) {
    console.log(fn + '发生了改变');
  } else {
    console.log('....');
  }
})
