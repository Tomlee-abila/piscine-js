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
    let count = 0
    if (subStr === ""){
        for (let i = 0; i < str.length; i++){
            result.push(str[i])
        }
        return result
    }
    if (str === ""){
        result.push(word)
        return result
    }
    for (let i = 0; i < str.length; i++){
        if (str[i]===subStr[0]){
            if ((slice(str, i, subStr.length+i) === subStr) && i >= start){
                count +++
                result.push(word)
                start = i+subStr.length
                word = ""
            }
            
        }
        if (i == str.length-1){
            if (i >= start){
                word += str[i]
            }
            if (result.length === count){
                result.push(word)
            }
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

// console.log(join(split(test, "rn"), " "))
// console.log(split('a b c', ' '))
// console.log(split('ee,ff,g,', ','))
// console.log(split('rrrr', 'rr'))
// console.log(split('Riad', ''))
console.log(split('', 'Riad'))