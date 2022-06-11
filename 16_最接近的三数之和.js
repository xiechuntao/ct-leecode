/* 2022-05-03 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let ans = Infinity
    let ansDiff = Infinity
    // 三层循环，暴力求解？
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let a = Math.abs(nums[i] + nums[j] + nums[k]-target)
                if( a < ansDiff) {
                    ansDiff = a
                    ans = nums[i] + nums[j] + nums[k]
                }
            }
        }
    }
    return ans
};

// TODO: 后续追加双指针写法 