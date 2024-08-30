function slice(input, start, opEnd = input.length){
    if (start < 0){
        start = input.length + start
    }
    if (opEnd < 0){
        opEnd = input.length + opEnd
    }

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

function split(str, subStr){
    let result = []
    let start = 0
    let word = ""
    for (let i = 0; i < str.length; i++){
        if (str[i]===subStr[0]){
            if (slice(str, i, subStr.length+i) === subStr){
                result.push(word)
                start = i+subStr.length
                word = ""
            }
            
        }
        if (i == str.length-1 && word !== ""){
            word += str[i]
            result.push(word)
        }
        
        if (i >= start){
            word += str[i]
        }
    }
    return result
}

function join(arr, subStr){
    let result = ""
    for (let i = 0; i < arr.length; i++){
        if (i !== arr.length-1){
            result += arr[i] + subStr
        }else{
            result += arr[i]
        }        
    }
    return result
}

let test = "hellorntherernwhenrnarernyourncoming"

console.log(join(split(test, "rn"), " "))