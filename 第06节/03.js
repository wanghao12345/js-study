/**
 * 返回斐波那契数列的前n项的和（n为给定）
 * @param n
 */
function fibSum(n) {
  return n > 1 ? fib(n) + fibSum(n - 1) : fib(n)
}

/**
 * 返回斐波那契数列的第n项
 * @param n
 */
function fib (n) {
  return (n === 1 || n === 2) ? 1 : fib(n - 1) + fib(n - 2)
}


console.log(fibSum(2))
