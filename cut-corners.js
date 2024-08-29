function modulo(a, b){
    let neg = false
    if ((a < 0)){
        neg = true
    }
    b = Math.abs(b)
    a = Math.abs(a)
    
    while (a >= b){
        a -= b
    }
    if (neg){
        a = -a
    }
    return a
}

function round(num){
    let neg = false
    if (num < 0){
        num = Math.abs(num)
        neg = true
    }
    if (num == Infinity){
        return Infinity
    }
    let exp = num - (modulo(num *10, 10)/10)
    if ((num + 0.5) >= exp + 1){
        exp = exp + 1
    }
    if (neg){
        exp = -exp
    }
    return exp
}

function ceil(num){
    if (num == Infinity){
        return Infinity
    }
    let exp = num - (modulo(num *10, 10)/10)
    if (num > exp){
        return exp + 1
    }
    return exp
}

function floor(num){
    if (num == Infinity){
        return Infinity
    }
    let exp = num - (modulo(num *10, 10)/10)
    if (num < exp){
        return exp - 1
    }
    return exp
}

function trunc(num){
    let exp = 0
    if (num == Infinity){
        return Infinity
    }
    if (num > 0xfffffffff){
        num -= 0xfffffffff
        exp = num - (modulo(num *10, 10)/10)
        exp += 0xfffffffff
    }else{
        exp = num - (modulo(num *10, 10)/10)
    }
    return exp
}


// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))

// [ 4, -4, 3, -3 ]
// [ 3, -4, 3, -4 ]
// [ 3, -3, 3, -3 ]
// [ 4, -3, 4, -3 ]

// [ 4, -3, 3, -3 ]
// [ 3, -4, 3, -4 ]
// [ 3, -3, 3, -3 ]
// [ 4, -3, 4, -3 ]