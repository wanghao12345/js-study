/**
 * 用true或false表示给定的字符串的花括号是否平衡（一一对应）
 * @param str
 */
function isBalanced(str) {
  var num1 = 0, num2 = 0, arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '{') num1++;
    if (arr[i] === '}') num2++;
  }
  return num1 === num2 ? true : false
}
