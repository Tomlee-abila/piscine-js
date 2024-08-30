const flat = (arr, num = 1) =>{
    let result = []
    let cond = false
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            cond = true
            for (let j = 0; j < arr[i].length; j++){
                result.push(arr[i][j])
            }
        }else{
            result.push(arr[i])
        }        
    }
    if (num > 1 && cond){
        result = flat(result, num - 1)
    }
    return result
}

console.log(flat([1,2,[3,4,[2,43,5,[23,4.5,7,7,2]]],5,6,[7,8]], Infinity))