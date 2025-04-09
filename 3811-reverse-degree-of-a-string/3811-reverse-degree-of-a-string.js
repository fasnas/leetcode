/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    const alphabet="abcdefghijklmnopqrstuvwxyz"
    let a=s.split("")
    count=0
    for(i=0;i<a.length;i++){
     let f= alphabet.split("").reverse("").join("").indexOf(a[i])+1
      count+= f*(i+1)
    }
    return count
};