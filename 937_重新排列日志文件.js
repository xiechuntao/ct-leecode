/* 2022-05-03 */

/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
  let [arr1, arr2] = [[],[]]
  logs.forEach(item => {
      isNaN(Number(item.split(' ')[1])) ? arr1.push(item) : arr2.push(item)
  })
  arr1.sort((a, b) =>  {
      let [aI, bI] = [a.indexOf(' '), b.indexOf(' ')]
      let [c, d] = [a.slice(0, aI), b.slice(0, bI)]
      a = a.slice(aI) 
      b = b.slice(bI) 
      if(a === b) {
          a += c
          b += d
      }
      return a > b ? 1 : -1
  })

  return [...arr1, ...arr2]
};