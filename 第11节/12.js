/*
* fs.exists(path, callback) 检测文件是否存在
*
* path: 文件路径
* callback:
*   exists: [boolean]
*
* */

var fs = require('fs');
var filename = '3.txt';

// 异步模式
fs.exists(filename, function (exists) {
  console.log(exists); // false

  if (!exists) { // 不存在
    fs.writeFile(filename, 'china', function (err) {
      if (err) {
        console.log('出错了');
      } else {
        console.log('创建新文件成功');
      }
    })
  } else { // 存在
    fs.appendFile(filename, '-good', function (err) {
      if (err) {
        console.log('新的内容追加失败');
      } else {
        console.log('新内容追加成功');
      }
    })
  }


});

// 同步模式
if (!fs.existsSync(filename)) {
  fs.writeFileSync(filename, 'china');
  console.log('新文件创建成功');
} else {
  fs.appendFileSync(filename, '-good');
  console.log('追加内容成功');
}

