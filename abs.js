const isPositive = (n) => (n > 0)
function abs (n){
    if (isPositive(n)){
        return n
    }
    if (n == 0){
        return 0
    }
    return n*-1
}

console.log(abs(-5))