/**
 * Javascript 预编译
 *
 * 执行步骤：
 *    ·1.检查通篇的语法错误
 *     2.预编译过程
 *     3.解释一行，执行一行
 *
 *   (a)
 *   test()
 *   function test() {
 *     console.log(1) // 1
 *   }
 *
 *   (b)
 *   console.log(a); // undefined
 *   var a ;
 *
 *   函数申明整体提升，变量只有申明提升，赋值不提升
 *
 *   (c)
 *   console.log(a) // function a(a){}
 *   function a(a){}
 *   var a = 1
 *
 *   (d)
 *   var a = 1
 *   b = 2
 *   console.log(window.b) // a = window.a
 *                         // b = window.b
 *   暗示全局变量 imply global variable
 *
 *   (e)
 *   function test(){
 *     var a = b = 1
 *     // 1.先声明 var a
 *     // 2.1赋值给b
 *     // 3.b的值赋值给a
 *   }
 *   console.log(a) // error
 *   console.log(window.a) // undefined
 *   console.log(b) // 1
 *   console.log(window.b) // 1
 *
 *   (f)
 *   function test(a) {
 *    console.log(a) // function a() {}
 *    var a = 1
 *    console.log(a) // 1
 *    function a() {}
 *    console.log(a) // 1
 *    var b = function () {}
 *    console.log(b) // function(){}
 *    function d() {}
 *   }
 *   test(2)
 *
 *   AO  activation object
 *   活跃对象，函数上下文
 *
 *   AO = {
 *
 *   }
 *
 *   <-预编译过程->
 *
 *   第一步：寻找形参和变量申明
 *   AO = {
 *     a: undefined,
 *     b: undefined
 *   }
 *
 *   第二步：实参赋值给形参
 *   AO = {
 *     a: undefined -> 2,
 *     b: undefined
 *   }
 *
 *   第三步：寻找函数体的申明，并赋值
 *   AO = {
 *     a: undefined -> 2 -> function a() {},
 *     b: undefined,
 *     d: function d() {}
 *   }
 *
 *   <-代码执行过程->
 *  第四步：执行函数体第一句
 *  // console.log(a)：function a(){}
 *
 *  第五步：执行函数体第二局
 *  //a = 1
 *   AO = {
 *     a: undefined -> 2 -> function a() {} -> 1,
 *     b: undefined,
 *     d: function d() {}
 *   }
 *
 *   ....
 *
 *
 *
 *
 */

