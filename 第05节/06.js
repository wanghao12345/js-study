/**
 * 罗马到整数
 * @param s
 */
var romanToInt = function (s) {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    var arr = [];
    s.split('').forEach((item)=>{
        arr.push(map.get(item))
    });
    arr.push(0);
    console.log(arr);
    var sum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i + 1]){
            sum += arr[i + 1] - arr[i]
            i++;
        } else {
            sum += arr[i]
        }
    }
    console.log(sum);
    return sum;
}

romanToInt('IX');
