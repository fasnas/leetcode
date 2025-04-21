/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res=[-1,-1]
     res[0]=nums.indexOf(target)
     res[1]=nums.lastIndexOf(target)
    return  res;
};