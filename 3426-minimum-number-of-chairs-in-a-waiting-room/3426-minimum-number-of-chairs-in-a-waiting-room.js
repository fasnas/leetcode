/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    count=0
    let max=0
    for(i=0;i<s.length;i++){
      if(s[i]=="E"){
        count=count+1
        max=Math.max(max,count)
      }
      else if(s[i]=="L"){
        count=count-1
      }
    }
    return max
};