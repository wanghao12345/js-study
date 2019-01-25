/**
 * 是否在有效范围内
 * @param num
 */
function isEffectiveRange(num) {
    if(num > Math.pow(2,31) - 1 || num < -1 * Math.pow(2,31)){
        return 0
    }else {
        return num
    }
}


/**
 * 给定32位有符号整数，整数的反向数字
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = isEffectiveRange(x);
    if (x >= 0){
        return isEffectiveRange(parseInt(x.toString().split('').reverse().join('')));
    }else{
        return isEffectiveRange(-1 * parseInt(x.toString().split('').reverse().join('')));
    }
};
reverse(-123000)
