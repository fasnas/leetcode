/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let a=[]
    let b=[]
    for(i=1;i<=n;i++){
     if(i%m==0){
       a.push(i)
     }else{
        b.push(i)
     }
    }
  return  b.reduce((acc,curr)=> (acc+curr),0) -a.reduce((acc,curr)=> (acc+curr),0)
};