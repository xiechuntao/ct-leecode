/* 2022-05-08 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = {}
    for(let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }
    const values = Object.values(map)
    if(s.length % 2 === 0) {
        return values.every(val => val % 2 === 0)
    } else {
        let n = 0
        values.forEach(item => {
            if(item % 2 === 1) n++
        })
        if(n === 1) return true
        return false
    }
};