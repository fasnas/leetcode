/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) return false;

    for (let i = 0; Math.pow(4, i) <= n; i++) {
        if (Math.pow(4, i) === n) {
            return true;
        }
    }
    return false;
};