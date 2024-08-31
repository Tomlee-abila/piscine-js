// const add4 = '+4'
// const mul2 = '*2'


const findExpression = (num)=>{
    if (num < 1){
        return undefined
    }

    function recursive(current, operation){

        if (current > num){
            return undefined
        }

        if (current === num){
            return operation
        }

        let result = recursive(current + 4, operation + " " + add4)
        if (result !== undefined){
            return result
        }

        result = recursive(current * 2, operation + " " + mul2)
        if (result !== undefined){
            return result
        }
        
        return undefined
    }

    return recursive(1, "1")
}

console.log(findExpression(102))