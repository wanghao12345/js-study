/**
 * 实现数组过滤功能
 */
Array.prototype.filterT = Array.prototype.filterT || function (func) {
  var arr = this, brr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      brr.push(arr[i])
    }
  }
  return brr;
}

var a = [1, 9, 3, 4];
var a1 = a.filterT(function (t) {
  return t < 3
})
console.log(a1);

var b = [1, 9, 3, 4];
var b1 = b.filter(function (t1) {
  return t1 < 3
})

console.log(b1);

