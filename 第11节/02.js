/*
* Global对象
*
* __filename: 返回当前模块文件解析后的绝对路径，该属性其实并非全局的，而是模块作用域下的。
* __dirname: 返回当前模块文件所在目录解析后的绝对路径，该属性也不是全局的，而是模块作用域下的。
*
*/


/*
* process对象：它是一个全局对象，可以在任何地方都能访问到它，
* 通过这个对象提供的属性和方法，使我们可以对当前运行的程序的
* 进程进行访问和控制
*/

// 1.process.argv: 一个包含命令行参数的数组，第一个元素是'node'，
// 第二个元素是.js文件的名称。接下来的元素依次是命令行传入的参数

// 在2.js中遍历process.argv
process.argv.forEach(function (val, index,  array) {
  console.log(index + ': ' + val)
})

// 执行 node 02.js one two three 命令,
// 打印：
// 0: node
// 1: ......../2.js
// 2: one
// 3: two
// 4: four

// 2.process.execPath: 返回启动Node.js进程的可执行文件的绝对路径名
console.log(process.execPath); // C:\Program Files\nodejs\node.exe

// 3.process.env: 返回用户环境信息
console.log(process.env);

// 4.process.pid: 返回进程的pid(可到任务管理器中查看)
console.log(process.pid); // 4452

// 5.process.title: 当前进程的显示名称
console.log(process.title); // D:\WebStorm 2018.2.1\bin\runnerw.exe

// 6.process.arch: 返回当前CPU处理器架构arm/ia32/x64
console.log(process.arch); // x64



