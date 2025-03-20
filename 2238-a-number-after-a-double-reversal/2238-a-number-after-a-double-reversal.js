/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let a=num.toString().split("").reverse().join("").toString()
    let b=Number(a)
    let c=b.toString().split("").reverse().join("")
    if(num==c){
        return true
    }
    return false
    
};