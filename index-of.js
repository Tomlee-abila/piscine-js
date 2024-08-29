function indexOf(arr, value, optional = 0){
    for (let i = optional; i < arr.length; i++) { 
        if (arr[i] === value){
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, value, optional = arr.length-1){
    for (let i = optional; i > 0; i--) { 
        if (arr[i] === value){
            return  i
        }
    }
    return -1
}

function includes(arr, value, optional = 0){
    for (let i = optional; i < arr.length; i++) { 
        if (arr[i] === value){
            return true
        }
    }
    return false
}

console.log(includes(["hello", "there", "hellen", "how", "there", "are", "you"], "there", 5))