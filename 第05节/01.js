var lengthOfLongestSubstring = function(s) {
   var len = 0;
   var s1 = [];
   for (var i = 0; i < s.length; i++){
       var item = s.charAt(i)
       if(s1.indexOf(item) != -1) {
           if(s1.length > len){
               len = s1.length;
               s1 = []
               s1.push(item)
           }
       } else {
           s1.push(item)
           if (i === s.length - 1) {
               len = s1.length
           }
       }
   }
    console.log(len);
    return len
};
lengthOfLongestSubstring('dvdf');
