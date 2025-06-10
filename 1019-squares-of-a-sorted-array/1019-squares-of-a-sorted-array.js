/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let a=[]
   for(i=0;i<nums.length;i++){
    a.push( Math.pow(nums[i],2))
     
   }
   let  res=a.sort((a,b)=>a-b)
   return res
   };