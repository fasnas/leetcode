/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let a=word.indexOf(ch)
    let x=word.slice(0,a+1)
    let b= word.slice(0,a+1).split("").reverse().join("")
    let c=word.replace(x,b)
    return c
};