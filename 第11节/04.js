/*
* Global全局变量：Buffer类
*
* 一个用于更好的操作二进制数据的类，我们在操作文件或者网络数据的时候
* 其实就是操作的二进制数据流，node为我们提供了一个更加方便的去操作这
* 种数据流的类Buffer,它是一个全局的类
*/
console.log(global.Buffer === Buffer); // true

/*
* 实例化Buffer类
*/

// 1. new Buffer(size); size [Number] 创建一个Buffer对象，并为这个对象分配一个大小
// 最新版本已经变成Buffer.alloc(size),当我们为一个Buffer对象分配空间大小以后，其长度是
// 固定的，不能更改

var bf = new Buffer(5);
console.log(bf); // <Buffer 00 00 00 00 00>
var bf1 = Buffer.alloc(5);
console.log(bf1); // <Buffer 00 00 00 00 00>

// 2. new Buffer(array),最新版本已经改用Buffer.from(array).一旦初始化固定的数组长度之后，
// 其长度是固定的，不能更改

var bf = new Buffer([1, 2, 3]);
console.log(bf); // <Buffer 01 02 03>

var bf1 = Buffer.from([1, 2, 3]);
console.log(bf1); // <Buffer 01 02 03>





















