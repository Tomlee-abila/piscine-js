const filterValues = (Obj, func) =>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) => {
        if(func(value)){
            result[key] = value
        }
    })
    return result
}

const mapValues = (Obj, func)=>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) =>{
        result[key] = func(value)
    })
    return result
}

const reduceValues = (Obj, func) =>{
    let result = 0
    let arr = Object.entries(Obj)
    let count = 0

    arr.forEach(([key, value]) =>{
        if (count == 0){
            result = value
        }else{
            result = func(result, value)
        }
        count++
    })
    return result
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// console.log(mapValues(nutrients, (v) => v+1))
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))


