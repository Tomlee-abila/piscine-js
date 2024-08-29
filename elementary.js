function multiply(a, b){
    let result = 0
    let neg = false
    if ((a < 0 || b < 0) && !(a < 0 && b < 0)){
        neg = true
    }
    b = Math.abs(b)
    a = Math.abs(a)
    
    while (b > 0){
        result += a
        b -= 1
    }
    if (neg){
        result = -result
    }
    return result
}

function divide(a, b){
    let n = 0
    let neg = false
    if ((a < 0 || b < 0) && !(a < 0 && b < 0)){
        neg = true
    }
    b = Math.abs(b)
    a = Math.abs(a)
    
    while (a >= b){
        a -= b
        n++
    }
    if (neg){
        n = -n
    }
    return n
}

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
    if (neg && a != 0){
        a = -a
    }
    return a
}

console.log(modulo(-10, -2))