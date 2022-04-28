/* 2022-04-28 */

// 两数之和，梦开始的地方 😂

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};

const yl = [[2,7,11,15], 9];
console.log(twoSum(...yl));