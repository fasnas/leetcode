/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   let a=nums1.filter((x)=>{
     return nums2.includes(x)
   })
   let res=[...new Set(a)]
   return res
};