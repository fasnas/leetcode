/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let a=s.split(" ") 
   let res=[]
   for(i=0;i<a.length;i++){
    let x= a[i].split("").reverse().join("")
    res.push(x)
   }
   let m=res.join(" ")
  return m
};