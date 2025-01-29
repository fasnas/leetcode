/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
function isAcronym(words, s) {
    if (s.length !== words.length) {
        return false;
    }
    let acronym = "";
    for (let word of words) {
        acronym += word[0];
    }
    return acronym === s;
}