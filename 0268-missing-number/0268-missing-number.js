/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
  let a=(nums.length*(nums.length+1)/2)
  let b=nums.reduce((acc,curr)=>{
       return acc+curr
  },0)

   return a-b}