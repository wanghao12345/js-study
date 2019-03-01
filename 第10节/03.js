/*
  GO global object 全局上下文

  1. 找变量
  2. 找函数申明
  3. 执行

  (a)
  var a = 1
  function a() {
    console.log(2)
  }
  console.log(a) // 1

  GO = {
    a: undefined -> function a(){} -> 1
  }

  其实GO就是window，即GO === window

  (b)
  console.log(a, b) // function a(){} undefined
  function a() {}
  var b = function () {}

  GO = {
    b: undefined
    a: function a(){}
  }



*/




