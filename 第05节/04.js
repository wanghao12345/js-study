/**
 * 获取处理过后的字符串
 * @param str
 */
function getString(str) {
    return '#' + str.split('').join('#') + '#';
}

function getP(str) {
    console.log(str);
}

/**
 * 最长的回文子串
 * @param s
 */
var longestPalindrome = function (s) {
    var s1 = getString(s);
    getP(s1)
}


longestPalindrome('cbdd')
