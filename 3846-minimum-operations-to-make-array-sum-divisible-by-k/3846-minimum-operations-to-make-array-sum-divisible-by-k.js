/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let a=nums.reduce((acc,cur)=>acc+cur,0)
    return a%k
};