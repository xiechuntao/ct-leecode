/* 2022-05-08 */

/**
 * @param {string} S
 * @return {string}
 */

// 复杂度较高
var compressString = function(S) {
    if (!S) return ''
    let arr = [S[0]]
    for(let i = 1; i < S.length; i++) {
        if(arr[arr.length-1][0] === S[i]) {
            arr[arr.length-1] += S[i]
        } else {
            arr.push(S[i])
        }
    }

    // let newStr = arr.map(val=> val[0] + '' + val.length).join('')
    if(S.length > arr.length * 2) {
        return arr.map(val=> val[0] + '' + val.length).join('')
    } else {
        return S
    }
};
