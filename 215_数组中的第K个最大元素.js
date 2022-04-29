/* 2022-04-29 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 解1.只为了过而过
var findKthLargest = function(nums, k) {
  return nums.sort((a,b)=>b-a)[k-1]
};
// TODO: 算法解答