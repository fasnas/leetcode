/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let res=[]
  let a=nums.splice(0,(nums.length/2)) 
   
   for(i=0;i<nums.length;i++){
     res.push(a[i])
     res.push(nums[i])
   }
   return res
};