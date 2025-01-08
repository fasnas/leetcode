/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let a=  nums.filter(num => num%2==0)
  let b= nums.filter(num=> num%2!==0)
    return a.concat(b)
};