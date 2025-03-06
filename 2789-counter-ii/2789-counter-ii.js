/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init,calls) {
//     let count=init
//      let a=[]
//      for(let i=0;i<calls.length;i++){
//         if(calls[i]==="increment"){
//             count+=1
//             a.push(count)
//         }
//         else if(calls[i]==="decrement"){
//             count-=1
//             a.push(count)
//         }
//         else if(calls[i]==="reset"){
//             count=init
//             a.push(count)
//         }
//      }
//      return a
// };


var createCounter = function(init,calls) {
   let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = init
    };


}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */