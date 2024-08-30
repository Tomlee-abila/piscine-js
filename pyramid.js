const pyramid = (str, num) => {
    let result = ""
    let count = 0
    for (let i = num; i >= 1; i--){
        for (let j= 1; j < i; j++){
            result += " "            
        }
        for (let k = num-i; k >= 0; k--){
            result += str            
        }
        for (let l = count; l > 0; l--){
            result += str
        }        
        if (i !== 1){
            result += "\n"
        } 
        count++       
    }
    return result
}

// console.log(pyramid("a", 5))
// console.log("     a\n    aaa\n   aaaaa\n  aaaaaaa\n aaaaaaaaa")
// console.log("    a\n   aaa\n  aaaaa\n aaaaaaa\naaaaaaaaa")