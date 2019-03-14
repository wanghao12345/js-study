// // 第一种写法
// var str = 'This is a test. Test is important';
//
// var reg1 = new RegExp('Test', 'g');
//
// console.log(reg1.test(str)); // true
// console.log(str.match(reg1)); // ['Test']
//
// var reg2 = new RegExp('Test', 'gi');
//
// console.log(reg2.test(str)); // true
// console.log(str.match(reg2)); // ['test', 'Test']
//
// var reg3 = new RegExp('Test', 'gim');
//
// console.log(reg3.test(str)); // true
// console.log(str.match(reg3)); // ['test', 'Test']
//
// // 第二种写法
//
// var str = 'This is a test. Test is important';
//
// var reg1 = /Test/g;
//
// console.log(reg1.test(str)); // true
// console.log(str.match(reg1)); // ['Test']
//
// var reg2 = /Test/gi;
//
// console.log(reg2.test(str)); // true
// console.log(str.match(reg2)); // ['test', 'Test']
//
// var reg3 = /Test/gim;
//
// console.log(reg3.test(str)); // true
// console.log(str.match(reg3)); // ['test', 'Test']


// // 1: 匹配成功过后的不会重复匹配，没有匹配成功的会重复匹配
// var str = '1032kdsjfsdhj123sdfsdf',
//     reg = /[1234567890][1234567890][1234567890]/g;
//
// console.log(str.match(reg)); // ['103', '123']
//
// // 2: 匹配区间
// var str = 'sdfsdfsfs231Fssfd-sdfsd',
//     reg = /[0-9][A-Z][a-z]/g;
// console.log(str.match(reg)); // ['1Fs']
//
//
// // 3: 多个区间取或,(注意：[A-Za-z]等价[A-z]，大写字母一定要放到前面，小写字母一定要放到后面，否则会报错)
// var str = 'sdfsdfsfs231Fssfd-sdfsd',
//   reg1 = /[0-9A-Za-z][A-Z][a-z]/g,
//   reg2 = /[0-9A-z][A-Z][a-z]/g;
// console.log(str.match(reg1)); // ['1Fs']
// console.log(str.match(reg2)); // ['1Fs']
//
// // 4：^的使用
// var str = '0Sdfsdfsfs231Fssfd-sdfsd',
//     reg1 = /[^0][A-Z][a-z]/g,
//     reg2 = /^[0][A-Z][a-z]/g
// console.log(str.match(reg1)); // ['1Fs'] ^放到选择括号内的最前面作非使用
// console.log(str.match(reg2)); // ['0Sd'] ^放到表达式前面表示只匹配字符串开头
//
// // 5：|的使用
// var str = '123sdfsdfsfs234Fssfd-sdfsd',
//     reg = /123|234/g;
// console.log(str.match(reg)); // ['123', '234'] 把符合条件的都选出来
//
//
// // 6：()的使用
//
// var str = '123sdfsdfsfs234Fssfd-sdfsd',
//   reg = /(123|234)[A-z]/g;
// console.log(str.match(reg)); // [ '123s', '234F' ] ()括号里面的内容优先执行



// 元字符 正则使用的转义字符
// \w === [0-9A-z_]
var str = '123absdf',
    reg = /\wab/g;

console.log(str.match(reg)); // [ '3ab' ]

// \W === [^\w]
var str = '123%absdf',
  reg = /\Wab/g;

console.log(str.match(reg)); // [ '%ab' ]

// \d === [0-9] digit
var str = '123absdf',
  reg = /\dab/g;

console.log(str.match(reg)); // [ '3ab' ]

// \D === [^\d]
var str = '123%absdf',
  reg = /\Dab/g;

console.log(str.match(reg)); // [ '%ab' ]

// \s === [\r\n\t\v\f] (不常用)
// \r: 回车符  \n: 换行符  \t: 制表符  tab  \v: 垂直换行符  \f: 换页符

// \S === [^\s] （不常用）
// \b 单词边界
var str = 'This is a test',
    reg = /\bThis\b/g;
console.log(str.match(reg)); //[ 'This' ]

var str = 'This is a test',
  reg = /\bThi/g;
console.log(str.match(reg)); //[ 'Thi' ]

// \B 非单词边界

var str = 'This is a test',
  reg = /\bThi\B/g;
console.log(str.match(reg)); //[ 'Thi' ]

var str = 'This is a test',
  reg = /\Bhi\B/g;
console.log(str.match(reg)); //[ 'hi' ]

// . 可以匹配除了回车和换行的所有字符
var str = 'This\ris\na\ttest',
    reg = /./g;
console.log(str.match(reg)); // [ 'T', 'h', 'i', 's', 'i', 's', 'a', '\t', 't', 'e', 's', 't' ]

// 匹配三位连续的所有字符
var str = 'abcdef',
  reg = /[\w\W][\s\S][\d\D]/g;
console.log(str.match(reg)); // [ 'abc', 'def' ]













