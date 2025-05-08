/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
  let steps;
  for (steps = 0; num > 0; steps++) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
  }
  return steps;
}
