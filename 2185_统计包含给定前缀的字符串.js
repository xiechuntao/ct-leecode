/* 2022-04-28 */

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
  let cnt = 0;
  for(let i = 0; i < words.length; i++) {
    if(pref.length > words[i].length) continue;
    if(pref === words[i].slice(0, pref.length)) {
      cnt ++;
    }
  }
  return cnt;
};

// 1.substring slice substr splice 这些常用截取api可以记忆下，每次要用搞不清谁是谁再去查

const yl = words = [["pay","attention","practice","attend"], "at"]
console.log(prefixCount(...yl));