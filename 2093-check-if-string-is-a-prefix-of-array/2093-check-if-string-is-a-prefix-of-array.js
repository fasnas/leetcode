/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  if(words[0]==s){
        return true
     }
    let a=words[0]
   for(let i=1;i<words.length;i++){
      a+=words[i]
      console.log(a)
     if(a==s){
       return true
     }
   }
   return false
};