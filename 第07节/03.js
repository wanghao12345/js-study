var numbers = [5, 458, 120, -215];

var maxInNumbers1 = Math.max.apply(Math, numbers)
var maxInNumbers2 = Math.max.call(Math, 5, 458, 120, -215)

console.log(maxInNumbers1);
console.log(maxInNumbers2);
