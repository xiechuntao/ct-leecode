/* 2022-04-28 */

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
  let [steps, whereOk] = [0, 0]; // 记步 浇到哪里了
  while(whereOk < plants.length) {
    let _capacity = capacity; // 装满水桶
    steps += whereOk * 2; // 折回来，所以算两次
    for(let i = whereOk; i < plants.length; i++) { // 从已经浇过的位置开始算
      if(_capacity >= plants[i]) { // 记步记位置
        steps += 1;
        whereOk += 1;
        _capacity -= plants[i];
      } else {
        break;
      }
    }
  }
  return steps;
};


const yl = [[7,7,7,7,7,7,7], 8]
// const yl = [[2,2,3,3], 5]
console.log(wateringPlants(...yl));

// 你打算用一个水罐给花园里的 n 株植物浇水。植物排成一行，从左到右进行标记，编号从 0 到 n - 1 。其中，第 i 株植物的位置是 x = i 。x = -1 处有一条河，你可以在那里重新灌满你的水罐。

// 每一株植物都需要浇特定量的水。你将会按下面描述的方式完成浇水：

// 按从左到右的顺序给植物浇水。
// 在给当前植物浇完水之后，如果你没有足够的水 完全 浇灌下一株植物，那么你就需要返回河边重新装满水罐。
// 你 不能 提前重新灌满水罐。
// 最初，你在河边（也就是，x = -1），在 x 轴上每移动 一个单位 都需要 一步 。

// 给你一个下标从 0 开始的整数数组 plants ，数组由 n 个整数组成。其中，plants[i] 为第 i 株植物需要的水量。另有一个整数 capacity 表示水罐的容量，返回浇灌所有植物需要的 步数 。


// 输入：plants = [2,2,3,3], capacity = 5
// 输出：14
// 解释：从河边开始，此时水罐是装满的：
// - 走到植物 0 (1 步) ，浇水。水罐中还有 3 单位的水。
// - 走到植物 1 (1 步) ，浇水。水罐中还有 1 单位的水。
// - 由于不能完全浇灌植物 2 ，回到河边取水 (2 步)。
// - 走到植物 2 (3 步) ，浇水。水罐中还有 2 单位的水。
// - 由于不能完全浇灌植物 3 ，回到河边取水 (3 步)。
// - 走到植物 3 (4 步) ，浇水。
// 需要的步数是 = 1 + 1 + 2 + 3 + 3 + 4 = 14 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/watering-plants
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
