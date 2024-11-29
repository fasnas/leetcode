/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 
 let a=nums.sort((a,b)=>a-b)
 for(i=0;i<a.length;i++){
    if(a[i]==a[i-1]||a[i+1]==a[i]){
        return true
    }
 }return false
};