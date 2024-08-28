function repeat(str, num){
    var result = ""
    while (num > 0){
        result += str
        num -= 1
    }
    return result
}