const filter = (arr, func) => {
    let result = []

    for (let i = 0; i<arr.length; i++){
        if (func(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
}

const reject = (arr, func) => {
    let result = []

    for (let i = 0; i<arr.length; i++){
        if (!func(arr[i],i,arr)){
            result.push(arr[i])
        }
    }
}

const partition = (arr, func) => {
    let pass = []
    let fail = []

    for (let i = 0; i<arr.length; i++){
        if (func(arr[i],i,arr)){
            pass.push(arr[i])
        }else{
            fail.push(arr[i])
        }
    }
    return [pass, fail]
}