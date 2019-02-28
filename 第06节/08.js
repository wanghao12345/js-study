/**
 * 实现数组的 indexOf方法
 * @type {*|Function}
 */
Array.prototype.indexOfT = Array.prototype.indexOfT || function (b) {
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
      if(arr[i] === b) return i;
  }
  return -1;
}


var a = [1, 2, 3]
console.log(a.indexOfT(11));

