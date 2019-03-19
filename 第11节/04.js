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

// 3. new Buffer(string, [encoding]),最新版本已经改用Buffer.from(string, [,encoding])

var bf = new Buffer('china', 'utf-8');
console.log(bf); // <Buffer 63 68 69 6e 61>

var bf1 = Buffer.from('china', 'utf-8');
console.log(bf1); // <Buffer 63 68 69 6e 61>


for (var i = 0; i < bf.length; i++) {
  console.log(bf[i].toString(16)); // 63 68 69 6e 61
  console.log(String.fromCharCode(bf[i]));// c h i n a
}


/*
* Buffer类的方法
*/

// 1. buf.write(string, offset, length, encoding)
// string: 要写入的字符串
// offset: 开始写入的偏移量
// length：要写入的字节数
// encoding: string的字符编码，默认'utf-8'

var str = 'china';
var buf = Buffer.alloc(5);
buf.write(str, 0, 2);
console.log(buf); // <Buffer 63 68 00 00 00>

// 2. buf.toString(encoding, start, end)
// encoding: 使用字符的编码，默认为'utf-8'
// start: 开始解码的字节偏移量
// end: 结束解码的字节偏移量，默认buf.length

var buf = Buffer.from('china');
console.log(buf.toString('utf-8', 0, 2)); // ch

// 3. buf.toJSON() 返回buf的JSON格式
var buf = Buffer.from('china');
console.log(buf.toJSON()); // { type: 'Buffer', data: [ 99, 104, 105, 110, 97 ] }

// 4. buf.slice(start, end)
// start: 开始切片的偏移量。默认为0
// end: 结束切片的偏移量，默认为buf.length

var buf = Buffer.from('china');
var buf2 = buf.slice(0, 2);
console.log(buf2); // <Buffer 63 68>
// 注意：改变buf2时，buf也会发生变化

// 5.buf.copy()对buf进行拷贝
var buf = Buffer.from('china');
var buf2 = Buffer.alloc(10);
buf.copy(buf2);
console.log(buf2); // <Buffer 63 68 69 6e 61 00 00 00 00 00>
// 注意：改变buf不会改变buf2

/*
* 类方法，静态方法
*/

// 1.Buffer.isEncoding(encoding) 支持的编码

console.log(Buffer.isEncoding('utf-8')); // true
console.log(Buffer.isEncoding('gbk')); // false
console.log(Buffer.isEncoding('hex')); // true


// 2.Buffer.isBuffer(obj) 判断obj是否时Buffer对象
var arr = [1, 2, 3];
var bf = new Buffer(10);

console.log(Buffer.isBuffer(arr)); // false
console.log(Buffer.isBuffer(bf)); // true

// 3.Buffer.byteLength(str) 获取字符串的字节长度

var str1 = 'china';

console.log(str1.length); // 5
console.log(Buffer.byteLength(str1)); // 5

var str2 = '中国';

console.log(str2.length); // 2
console.log(Buffer.byteLength(str2, 'utf-8')); // 6
console.log(Buffer.byteLength(str2, 'ascii')); // 2


// 4.Buffer.contact(list, totalLength) 拼接两个buffer
// list: buf数组
// totalLength: 合并后Buffer总长度

var str1 = 'china',
    str2 = '中国';
var list = [Buffer.from(str1), Buffer.from(str2)];
console.log(list); // [ <Buffer 63 68 69 6e 61>, <Buffer e4 b8 ad e5 9b bd> ]

var bf = Buffer.concat(list, 15);
console.log(bf); // <Buffer 63 68 69 6e 61 e4 b8 ad e5 9b bd 00 00 00 00>


process.stdout.write('请输入:'); // 中国

process.stdin.resume();

process.stdin.on('data', function (chunk) {
  console.log(chunk); // <Buffer e5 bc a0 e5 9b bd 0a>
  console.log(chunk.toString()); // 中国
});














