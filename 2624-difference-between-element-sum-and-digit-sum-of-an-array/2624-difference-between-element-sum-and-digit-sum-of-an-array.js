/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let sum=nums.reduce((acc,cur)=>acc+cur,0)  
  let sample=[]
  for(i=0;i<nums.length;i++){
    if(nums[i]<10){
        sample.push(nums[i])
    }
    
    else{
   let x= nums[i].toString().split("")
   for(j=0;j<x.length;j++){
    sample.push(Number(x[j]))
   }}
  }
  let sampleres=sample.reduce((acc,cur)=>acc+cur,0)
  return sum-sampleres
};