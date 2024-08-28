function repeat(str, num){
    let result = ""
    while (num > 0){
        result += str
        num -= 1
    }
    return result
}