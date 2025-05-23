/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
let a=s.split(" ")
let arr=[]
  for(let i=1;i<=a.length;i++){
    let res=a.filter((x)=>x.includes(i))
    arr.push(res)
  }
  let h=arr.flat()
  let gh=[]
  for(i=0;i<h.length;i++){
    let u= h[i].slice(0,-1)
    gh.push(u)
  }
  return gh.join(" ")
};