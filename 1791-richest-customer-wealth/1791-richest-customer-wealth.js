/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   
    let a=accounts.map((item)=>{
       return item.reduce((acc,cur)=>{
        return acc+cur
        },0)
    })
    return Math.max(...a)
};