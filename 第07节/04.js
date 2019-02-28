function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

var arr = []

if (isArray(arr)) {
  console.log('是数组');
} else {
  console.log('不是数组');
}
