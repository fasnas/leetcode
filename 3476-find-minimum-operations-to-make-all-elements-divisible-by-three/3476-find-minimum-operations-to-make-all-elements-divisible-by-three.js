/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
   let res=nums.filter((x)=>x%3==0)
   return nums.length-res.length
};