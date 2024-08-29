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
    if (num == Infinity){
        return Infinity
    }
    let exp = num - (modulo(num *10, 10)/10)
    if ((num + 0.5) >= exp + 1){
        return exp + 1
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
    if (num == Infinity){
        return Infinity
    }
    let exp = num - (modulo(num *10, 10)/10)
    return exp
}
console.log(trunc(-0.123))