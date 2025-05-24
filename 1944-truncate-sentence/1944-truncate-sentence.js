/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let a=s.split(" ")
    let res=a.slice(0,k).join(" ")
    return res;
};