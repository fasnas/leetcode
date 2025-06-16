/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    const arr = s.split('');
    const vowelChars = arr.filter(char => vowels.includes(char)).reverse();

    let result = arr.map(char => 
        vowels.includes(char) ? vowelChars.shift() : char
    );

    return result.join('');
};
