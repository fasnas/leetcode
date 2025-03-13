/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let a=[]
    for(i=0;i<sentences.length;i++){
       let b=sentences[i].split(" ")
        a.push(b.length)
    }
    let b=a.sort((a,b)=>b-a)
    return b[0]
};