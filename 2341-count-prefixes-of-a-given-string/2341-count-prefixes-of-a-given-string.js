/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count=0
   for(let i=0;i<words.length;i++){
      let a=words[i].length
      let b=s.slice(0,a)
      console.log(b)
      if(words[i]==b){
        count=count+1
      }
   } 
   return count
};