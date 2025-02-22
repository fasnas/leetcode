/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
   let a= words.filter((item)=>{
       if(item.split("").reverse().join("")==item){
              return item
       }
    })
    if(a.length==0){
        return ""
    }
     return a[0]
    
};