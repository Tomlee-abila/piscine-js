function slice(input, start, opEnd = input.length) {
    if (start < 0) {
        start = input.length + start
    }
    if (opEnd < 0) {
        opEnd = input.length + opEnd
    }
    if (Array.isArray(input)) {
        let result = []
        for (let i = start; i < opEnd; i++) {
            if (i === start) {
                result.push(input[i])
            } else {
                result.push(input[i])
            }
        }
        return result
    } else {
        let result = ""
        for (let i = start; i < opEnd; i++) {
            if (i === start) {
                result += input[i]
            } else {
                result += input[i]
            }
        }
        return result
    }

}

function chunk(arr, num) {
    let result = []
    for (let i = 0; i < arr.length;) {
        if (num+i < arr.length){
            result.push(slice(arr, i, num + i))
        }else{
            result.push(slice(arr, i))
        }        
        i += num
    }
    return result
}

console.log(chunk([2, 3, 4, 5, 6, 7, 8], 2))