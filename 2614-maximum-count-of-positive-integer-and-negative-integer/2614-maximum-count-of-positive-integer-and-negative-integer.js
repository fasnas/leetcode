/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    positiveCount=0
    negativeCount=0
    for(i=0;i<nums.length;i++){
        if(nums[i]>0){
            positiveCount++
        }else if(nums[i]<0){
            negativeCount++
        }
    }

    if(positiveCount>negativeCount){
        return positiveCount
    }
    return negativeCount
};