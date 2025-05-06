/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let a=nums.filter((x)=>x%2==0)
    let b=nums.filter((x)=>x%2 !==0)
    let res=[]
    for(i=0;i<a.length;i++){
        res.push(a[i])
        res.push(b[i])
    }
   return res
};