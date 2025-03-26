/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let a=Math.sqrt(num)
    let b=Math.trunc(a)
    if(a==b){
        return true
    }
   return false
};