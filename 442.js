/* 2022-05-08 */
var findDuplicates = function(nums) {
  let ans = []
  const len = nums.length
  for(let i = 0; i < len; i++) {
    const val = Math.abs(nums[i]) - 1 // 当前值作为下表对应的值
      if(nums[val] > 0) {
          nums[val] = 0 - nums[val]  // 如果大于0把值改为负数
      } else {
          ans.push(Math.abs(nums[i])) // 小于0则push到答案
      }
  }
  return ans
}

const yl = [10,2,5,10,9,1,1,4,3,7]
// const yl = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(yl))