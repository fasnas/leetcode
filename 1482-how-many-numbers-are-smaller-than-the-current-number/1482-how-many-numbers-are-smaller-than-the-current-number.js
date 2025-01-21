/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  return nums.map((num, i) => {
    return nums.filter((n) => n < num).length;
  });
};
