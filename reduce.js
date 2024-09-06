const fold = (arr, func, accumulator ) =>{
    for (let i=0; i<arr.length; i++){
        accumulator = func(accumulator, arr[i]) 
    }
    return accumulator
}

const foldRight = (arr, func, accumulator ) =>{
    for (let i=arr.length-1; i>=0; i--){
        accumulator = func(accumulator, arr[i]) 
    }
    return accumulator
}

const reduce = (arr, func, accumulator = undefined) =>{
    for (let i=0; i<arr.length; i++){
        if(accumulator == undefined && i == 0){
            accumulator = arr[i]
            i++
        }
        accumulator = func(accumulator, arr[i]) 
    }
    return accumulator
}

const reduceRight = (arr, func, accumulator = undefined) =>{
    console.log(arr)
    if (arr.length === 0) {
        return accumulator
    }
    
    for (let i=arr.length-1; i>=0; i--){
        if(accumulator == undefined && i == arr.length-1){
            accumulator = arr[i]
            i--
        }
        accumulator = func(accumulator, arr[i]) 
    }
    return accumulator
}

// console.log(reduceRight([ 3, 10, 26, 0 ],func=(num, ac) => num+ac))