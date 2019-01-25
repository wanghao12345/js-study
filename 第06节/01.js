/**
 * 判断一个数是否为质数
 * @param num
 */
function isPrime(num) {
  if (num === 2 || num === 3 || num === 5) {
    return true;
  }
  if (num < 2 || !isInteger(num) || !isNum(num) || !isDual(num)) {
    return false;
  }
  for (var i = 2; i < num / 2 + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


/**
 * 判断是否是整数
 */
function isInteger (num) {
  return num === ~~num ? true : false;
}

/**
 * 判断是否是数字
 */
function isNum (num) {
  return num === +num ? true : false;
}

/**
 * 判断数字末尾是否是2或者5
 */
function isDual (num) {
  var num  = num.toString();
  var lastNum = num.substring(num.length - 1, num.length);
  return lastNum %2 === 0 || lastNum % 5 === 0 ? false : true;

}





console.time('test time:');
if (isPrime(5)) {
  console.log('是质数');
} else {
  console.log('不是质数');
}
console.timeEnd('test time:');



