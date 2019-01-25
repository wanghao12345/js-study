/**
 * 求两个有序数组的中位数
 * @param nums1
 * @param nums2
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums3 = nums1.concat(nums2);
    var result = 0;
    nums3.sort(function (val1, val2) {
        return val1 - val2
    });
    mid = parseInt(nums3.length/2);
    if (nums3.length % 2 === 0) {
        result = (nums3[mid - 1] + nums3[mid]) / 2
    } else {
        result = nums3[mid]
    }
    return result
};

findMedianSortedArrays([3], [-2, -1])
