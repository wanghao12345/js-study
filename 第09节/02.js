/**
 * 统计字符串中次数最多的字母
 * @param str
 */


// function findMaxDuplicateChar(str) {
//   var arr = [...new Set(str)];
//   var maxPha = {max: 0, pha: null}
//   arr.forEach((item) => {
//     var sub_str = str, subNum = 0;
//     while(sub_str.indexOf(item) !== -1) {
//       subNum++
//       sub_str = sub_str.slice(sub_str.indexOf(item) + 1)
//     }
//
//     if (subNum > maxPha.max) {
//       maxPha.max = subNum
//       maxPha.pha = item
//     }
//   })
//   console.log(maxPha);
//
// }
// findMaxDuplicateChar('abcabca2131111313225')

function findMaxDuplicateChar(str) {
  var charObj = {}
  for (var i = 0; i < str.length; i++) {
    if (!charObj[str.charAt(i)]){
      charObj[str.charAt(i)] = 1;
    } else {
      charObj[str.charAt(i)] += 1;
    }
  }
  var maxChar = '',
      maxValue = 1;
  for (var k in charObj) {
    if (charObj[k] >= maxValue) {
      maxChar = k;
      maxValue = charObj[k]
    }
  }

  console.log(maxChar + ':' + maxValue)
}

findMaxDuplicateChar('dsfdssafa')










