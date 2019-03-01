/*
练习

  （1）
   function test() {
      var a = b = 1;
      console.log(b); // 1
   }
   test();
   步骤：
   <-预编译过程->
   1.
   GO = {

   }

   2.
   GO = {

   }

   AO = {
      a: undefined
   }
   <-执行过程->
   3.
   GO = {
      b: 1
   }

   AO = {
      a: undefined
   }

   4.
   GO = {
      b: 1
   }

   AO = {
      a: undefined -> 1
   }

   (2)
   var b = 3;
   console.log(a); // function a(a){...}
   function a(a){
      console.log(a) // function a(){}
      var a = 2;
      console.log(a); // 2
      function a(){}
      var b = 5;
      console.log(b) // 5
   }
   a(1);

   步骤：

   <-编译过程->

   GO = {
      b: undefined,
      a: function a(){...}
   }

   AO = {
      a: undefined -> 1 -> function a(){}
      b: undefined
   }

  <-执行过程->

   GO = {
      b: undefined -> 3,
      a: function a(){...}
   }

   AO = {
      a: undefined -> 1 -> function a(){} -> 2
      b: undefined -> 5
   }


  (3)
  a = 1;
  function test(){
    console.log(a); // undefined
    a = 2;
    console.log(a); // 2
    var a = 3;
    console.log(a) // 3
  }
  test()

  (4)
  function test(){
    console.log(b); // undefined
    if (a) {
      var b = 2;
    }

    c = 3;
    console.log(c) // 3
  }

  var a;
  test();
  a = 1;
  console.log(a); // 1

  (5)
  function test(){
    return a;
    a = 1;
    function a(){}
    var a = 2;
  }
  console.log(test()); // function a(){}


  (6)
  function test(){
    a = 1;
    functin a(){}
    var a = 2;
    return a;
  }
  console.log(test()); // 2

  (7)
  a = 1;
  function test(e){
    function e(){}
    arguments[0] = 2;
    console.log(e); // 2
    if(a){
      var b = 3;
    }
    var c;
    a = 4;
    var a;
    console.log(b); // undefined
    f = 5;
    console.log(c); // undefined
    console.log(a); // 4
  }
  var a;
  test(1);

*/
