/**
 * 实现reduce函数
 */
Array.prototype.reduceT = Array.prototype.reduceT || function (func) {
  var arr = this, sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum = func(sum, arr[i]);
  }
  return sum
}

var arr = [{
  name: '小明',
  age: 12
},{
  name: '小白',
  age: 14
}]
var b =  arr.reduceT(function (prev, next) {
  return prev.age + next.age
})

console.log(b);
