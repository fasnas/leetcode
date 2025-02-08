/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
     value=0
    for(i=0;i<s.length-1;i++){
       value+= Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    }
    return value
};