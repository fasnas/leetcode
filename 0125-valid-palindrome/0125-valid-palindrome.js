/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
  let a = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if(a==a.split("").reverse().join("")){
    return true;
  }
  return false
};