function slice(input, start, opEnd = input.length){
    if (start < 0){
        start = input.length + start
    }
    if (opEnd < 0){
        opEnd = input.length + opEnd
    }
    if (Array.isArray(input)){
        let result = []
        for (let i = start; i < opEnd; i++){
            if (i === start){
                result.push(input[i])
            }else{
                result.push(input[i])
            }        
        }
        return result
    }else{
        let result = ""
        for (let i = start; i < opEnd; i++){
            if (i === start){
                result += input[i]
            }else{
                result += input[i]
            }        
        }
        return result
    }
    
}

console.log(slice(["hello", "there", "sharon", "how", "have", "you", "been"], -2))