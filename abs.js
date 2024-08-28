const isPositive = (n) => !(n < 0)
function abs (n){
    if (isPositive(n)){
        return n
    }
    return n*-1
}