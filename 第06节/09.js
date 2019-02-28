/**
 * isPalindrome - 返回true或false判断给定字符串是否是一个回文(palindrome)（大小写不敏感）
 * @param str
 */

function isPalindrome(str) {
  return str.toUpperCase() === str.split('').reverse().join('').toUpperCase() ? true : false;
}


if(isPalindrome('waAw')) {
  console.log('是');
} else {
  console.log('否');
}
