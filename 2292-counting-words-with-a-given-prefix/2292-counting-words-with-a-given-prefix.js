/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    count=0
    for(i=0;i<words.length;i++){
      if(words[i].slice(0,pref.length) ==pref){
        count++
      }
      
    }
    return count
};