/*
* fs.mkdir(path, [mode], callback) 创建文件夹
* */

var fs = require('fs');

fs.mkdir('./1', function () {
  console.log(arguments);
});


/*
* fs.rmdir(path, [mode], callback) 删除文件夹
*
* */
/*
fs.rmdir('./1', function () {
  console.log(arguments);
});
*/

/*
* fs.readdir(filename, callback) 读取文件夹
* */
fs.readdir('../第11节', function (err, fileList) {
  fileList.forEach(function (f) {
    fs.stat(f, function (err, info) {
      switch (info.mode) {
        case 16822:
          console.log('[文件夹]' + f);
          break;

        case 33206:
          console.log('[文件]' + f);
          break;

        default:
          console.log('[其它类型]' + f);
          break;
      }
    })
  })


})
