/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count=0
   for(i=0;i<arr.length;i++){
     if(arr[i]%2==0){
        count=0
     }else{
     count=count+1
       if(count==3){
         return true
       }
     }
   } 
  return false
  
};