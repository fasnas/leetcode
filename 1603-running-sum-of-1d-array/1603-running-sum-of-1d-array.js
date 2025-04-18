/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let a=[]
    count=0
    for(i=0;i<nums.length;i++){
      count=count+nums[i]
      a.push(count)
    }
    return a
};