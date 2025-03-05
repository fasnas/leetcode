/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a= new Set(nums)
    b=[...a]
    let c=b.sort((a,b)=>b-a)
    if(c.length<3){
        return b[0]
    }       
    return c[2]                
};