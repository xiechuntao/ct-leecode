/* 2022-05-08 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let price = []
    for(let i = 0; i < bills.length; i++) {
        let val = bills[i]
       
        if(val === 5) {
            price.push(5)
        } else if (val === 10) {
            price.push(10)
            let indx = price.indexOf(5)
            if(indx < 0) {
                return false // 不满足找零需求
            } else {
                price.splice(indx, 1)
            }
        } else if (val === 20) {
            price.push(20)
            // 看看手上有没有超过除20元外15元的钱
            let wuyuanIndx = []
            let shiyuanIndx = []
            price.forEach((val, i)=> {
                if(val === 5) {
                    wuyuanIndx.push(i)
                } else if(val === 10) {
                    shiyuanIndx.push(i)
                }
            })

            let a = (shiyuanIndx.length >= 1 && wuyuanIndx.length >=1)
            let b = (wuyuanIndx.length >=3)

            if(!a && !b) return false; // 不满足找零需求
            if(a) {
                price.splice(price.indexOf(10), 1)
                price.splice(price.indexOf(5), 1)
            } else if(b) {
                price.splice(price.indexOf(5), 1)
                price.splice(price.indexOf(5), 1)
                price.splice(price.indexOf(5), 1)
            }      
        }
    }
    return true
};

// 把模拟数组改成计数后
var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    let twenty = 0
    for(let i = 0; i < bills.length; i++) {
        let val = bills[i]
        if(val === 5) {
            five++
        } else if (val === 10) {
            ten++
            if(five < 1) {
                return false // 不满足找零需求
            } else {
                five--
            }
        } else if (val === 20) {
            twenty++
            let a = (ten >= 1 && five >=1)
            let b = (five >=3)
            if(!a && !b) return false; // 不满足找零需求
            if(a) {
                ten--
                five--
            } else if(b) {
                five -= 3
            }      
        }
    }
    return true
};