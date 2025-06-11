/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
   let count =0
   let res=[0] 
   for(i=0;i<gain.length;i++){
    count=count+gain[i]
    res.push(count)
   }
   let a=res.sort((a,b)=>b-a)
   return a[0]
};