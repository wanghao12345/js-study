/**
 * 表示给定的数组是否被排序过
 * @param arr
 * @returns {boolean}
 */
function isSorted(arr) {
  return (arr.toString() === arr.sort().toString())
      || (arr.toString() === arr.sort((a, b) => {return b > a}).toString())
      ? true : false
}

if (isSorted([1, 3, 2])){
  console.log('排序过');
} else {
  console.log('meiyou');
}
