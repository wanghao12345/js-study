/*
* 前端项目自动化创建
* */

var projectData = {
  name: 'project',
  fileData: [
    {
      name: 'css',
      type: 'dir'
    },
    {
      name: 'js',
      type: 'dir'
    },
    {
      name: 'images',
      type: 'dir'
    },
    {
      name: 'index.html',
      type: 'file',
      content: '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<div>Hello Node</div>\n\t</body>\n</html>'
    },
  ]
};

var fs = require('fs');

if (projectData.name) {
  fs.mkdirSync(projectData.name);
  var fileData = projectData.fileData;

  if (fileData && fileData.forEach) {
    fileData.forEach(function (f) {

      f.path = projectData.name + '/' + f.name;

      switch (f.type) {
        case 'dir':
          fs.mkdirSync(f.path);
          break;
        case 'file':
          fs.writeFileSync(f.path, f.content)
          break;
      }

    })
  }


}
