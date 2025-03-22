/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
   let a=[]
   let b=word1.split("")
   let c=word2.split("")
   for(i=0;i<b.length+c.length;i++){
     a.push(b[i])
     a.push(c[i])
   }
   return a.join("")
};