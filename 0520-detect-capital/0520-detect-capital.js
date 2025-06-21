/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let a=word.toUpperCase()
    let b=word.toLowerCase()
    let c=word[0].toUpperCase()+word.slice(1).toLowerCase()
    console.log(c)
    if(a===word){
        return true
    }else if(b===word){
        return true
    }else if(c===word){
      return true
    }
    return false
};