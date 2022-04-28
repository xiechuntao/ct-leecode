/* 2022-04-28 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  return 0 
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [nums[i], nums[j]]
      }
    }
  }
  return 0
};

const yl = [[2,7,11,15], 9];
console.log(twoSum(...yl));