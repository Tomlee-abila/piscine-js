const triangle = (str, num) =>{
    let result = ""
    for (let i = 1; i <= num; i++){
        for (let j= 0; j < i; j++){
            result += str
        }
        result += "\n"
    }
    return result
}

console.log(triangle("*", 5))