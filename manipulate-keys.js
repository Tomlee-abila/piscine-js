const filterKeys = (Obj, func) =>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) => {
        if(func(key)){
            result[key] = value
        }
    })
    return result
}

const mapKeys = (Obj, func)=>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) =>{
        key = func(key)
        result[key] = value
    })
    return result
}

const reduceKeys = (Obj, func, op = undefined) =>{
    let result = op
    let arr = Object.entries(Obj)
    let count = 0

    arr.forEach(([key, value]) =>{
        if (count == 0 && op === undefined){
            result = key
        }else{
            result = func(result, key)
        }
        count++
    })
    return result
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
console.log(mapKeys(nutrients, (k) => `-${k}`))
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))

