/*
* module和exports
*
* 在一个模块中通过val定义的变量，其作用域范围是当前模块，外部不能够直接的访问
* 如果我们想一个模块能够访问另外一个模块中定义的变量，有如下方式：
*/


/*
* 1.把变量作为global对象的一个属性，但是这样的做法不推荐
*/
global.a = 100;
console.log(global.a);

/*
* 2.使用模块对象 module
*
* module: 保存提供和当前模块有关的一些信息
*
* 在这个module对象，有一个子对象：exports对象
* 我们可以通过这个对象把一个模块中的局部变量对象进行提供访问
*/

console.log(module);
// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: 'G:\\js-study\\第11节\\module\\01.js',
//   loaded: false,
//   children: [],
//   paths: ['G:\\js-study\\第11节\\module\\node_modules',
//           'G:\\js-study\\第11节\\node_modules',
//           'G:\\js-study\\node_modules',
//           'G:\\node_modules' ]
// }


// 1.js定义如下
var a = 100;
module.exports.a = a;

// 2.js接收1.js
var m5 = require('./1') // 这个方法的返回值，其实就是被加载模块中的module.exports
console.log(m5) // { a: 100}

/*
* 在模块作用域中：还有一个内置的模块对象: exports
* 它其实就是module.exports对象。
*/

console.log(exports === module.exports); // true

// 注意：使用exports或者module.exports时不要直接改变对象指向，
// 一旦改变对象指向exports和module.exports就不会相等。


























