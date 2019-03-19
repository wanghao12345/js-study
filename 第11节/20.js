/*
* 自动合并
* */
var fs = require('fs');

var fileDir = './project/source';

fs.watch(fileDir, function (ev, file) {
  /*
  * 这里不需要判断file是否有内容
  * 只要有一个文件发生了变化,我们就需要对这个文件夹
  * 下得所有文件进行读取,然后合并
  * */
  fs.readdir(fileDir, function (err, dataList) {

    var arr = [];

    dataList.forEach(function (f) {

      var info = fs.statSync(fileDir + '/' + f);

      if (info.mode === 33206) {
        arr.push(fileDir + '/' + f);
      }

    });

    // 读取数组中得文件内容,并合并

    var content = '';
    arr.forEach(function (f) {
      var c = fs.readFileSync(f);
      content += c.toString() + '\n';
    })

    console.log(content);

    fs.writeFileSync('./project/js/index.js', content);

  });

});
