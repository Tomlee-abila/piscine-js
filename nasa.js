function nasa(n){
    let result = ""

    for (let i = 1; i <= n; i++){
        if (i%3 == 0){
            if (i%5 == 0){
                result += " NASA"
            }else{
                result += " NA"
            }
            
        }else if (i%5 == 0){
            result += " SA"
        }else{
            if (i == 0){
                result += String(i)
            }else{
                result += " "+String(i)
            }            
        }
    }
    return result
}

console.log(nasa(30))