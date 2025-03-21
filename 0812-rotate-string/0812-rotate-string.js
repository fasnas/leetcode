/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let a=s.split("")
    let b=goal.split("")
    
    for(i=0;i<b.length;i++){
      
      let x= b.shift()
      b.push(x)
      if (a.join('') === b.join('')) { 
            return true;
      }
    }
    return false
};