/**
 * 冒泡排序
 */
function bubbleSort(arr) {
  var i = j = 0;
  for (i = 1; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      var temp = 0;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort([2,8,1,4])
