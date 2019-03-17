/**
 * Created by wanghao on 2019/3/17
 */
// 正则表达之量词
// 规则：字符串从左到右，依次先匹配多，再匹配少，如果一旦匹配上就不回头匹配。
// （1）不回头
// （2）贪婪模式


// 1. n+ {1, 正无穷}
var reg = /\w+/g,
    str = 'abcdefg';
console.log(str.match(reg)); // [ 'abcdefg' ]

// 2. n* {0, 正无穷}
var reg = /\w*/g,
  str = 'abcdefg';
console.log(str.match(reg)); // [ 'abcdefg', '' ]

// 3. n? {0, 1}
var reg = /\w?/g,
  str = 'abcdefg';
console.log(str.match(reg)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', '' ]

// 4. n{x,y} {1,正无穷} === n+  {0,正无穷} === n*  {0,1} === n?
var reg = /\w{2,3}/g,
  str = 'abcdefg';
console.log(str.match(reg)); // [ 'abc', 'def' ]

var reg = /\w{0,3}/g,
  str = 'abcdefg';
console.log(str.match(reg)); // [ 'abc', 'def', 'g', '' ]

var reg = /\w{0,}/g,
  str = 'abcdefg';
console.log(str.match(reg)); // [ 'abcdefg', '' ]

// 5. ^n 匹配任何以n开头的字符串
var reg = /^ab/gm,
  str = 'abcdefg\nabef';
console.log(str.match(reg)); // [ 'ab', 'ab' ]

// 6. n$ 匹配任何以n结尾的字符串
var reg = /ab$/gm,
  str = 'abcdeab\nabab';
console.log(str.match(reg)); // [ 'ab', 'ab' ]

// 练习1：检查字符串是否以abcd开头和以abcd结尾
var reg = /^abcd\w*abcd$/,  // 建议使用 reg = /^abcd.*abcd$/
    str = 'abcd123123abcd';
console.log(reg.test(str)); // true

// 练习2：检查字符串是否以abcd开头或以abcd结尾
var reg = /^abcd|abcd$/,
  str = 'abcd123123abcd';
console.log(reg.test(str)); // true

// 练习3：检查字符串是否以abcd和abcd结尾，并且开头结尾之间是数字
var reg = /^abcd\d+abcd$/, // 不能用\d*
  str = 'abcd213abcd';
console.log(reg.test(str)); // true

// 练习4：匹配以138开头的11位手机号
var reg = /^138\d{8}/g,
    str = '13896441012';
console.log(str.match(reg)); // [ '13896441012' ]

// 7. ?=n 匹配任何其后紧接着指定字符串n的字符串
var reg = /a(?=b)/g,
    str = 'abcdaccda';
console.log(str.match(reg)); // [ 'a' ]

// 8. ?!n 匹配任何其后紧接着不为指定字符串n的字符串
var reg = /a(?!b)/g,
  str = 'abcdaccda';
console.log(str.match(reg)); // [ 'a', 'a' ]

// 子表达式：用括号()括起来
// 反向引用：\1\1\1\1


var reg = /(a)\1\1\1/g,
    str = 'bbaaaaccaaaaiddddaaaa';
console.log(str.match(reg)); // [ 'aaaa', 'aaaa', 'aaaa' ]

var reg = /(\w)\1\1\1/g,
  str = 'bbaaaaccaaaaiddddaaaa';
console.log(str.match(reg)); // [ 'aaaa', 'aaaa', 'dddd', 'aaaa' ]

var reg = /(\w)\1(\w)\2/g,
  str = 'bbaaaaccaaaaiddddaaaa';
console.log(str.match(reg)); // [ 'bbaa', 'aacc', 'aaaa', 'dddd', 'aaaa' ]




























