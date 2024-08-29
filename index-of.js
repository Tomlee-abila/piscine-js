function indexOf(arr, value){
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === value){
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, value){
    let result = -1
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === value){
            result = i
        }
    }
    return result
}

function includes(arr, value){
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === value){
            return true
        }
    }
    return false
}

console.log(includes(["hello", "there", "hellen", "how", "there", "are", "you"], "thered"))