/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
   let a = nums.filter(item => item % 2 === 0 && item % 3 === 0);
   let b = a.reduce((acc, curr) => acc + curr, 0); 
   if (a.length === 0) {
      return 0;
   }
   return Math.floor(b / a.length);
};
