const filterEntries = (Obj, func) =>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) => {
        if(func([key, value])){
            result[key] = value
        }
    })
    return result
}

const mapEntries = (Obj, func)=>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) =>{
        result[func([key, value])[0]] = func([key, value])[1]
    })
    return result
}

const reduceEntries = (Obj, func, op = undefined) =>{
    let result = op
    let arr = Object.entries(Obj)
    let count = 0

    arr.forEach(([key, value]) =>{
        if (count == 0 && op === undefined){
            result = value
        }else{
            result = func(result, value)
        }
        count++
    })
    return result
}

const filterValues = (Obj, func) =>{
    let result = {}
    let arr = Object.entries(Obj)

    arr.forEach(([key, value]) => {
        if(func(key, value)){
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

const totalCalories = obj =>{
    let obj1 = mapValues(obj, (value)=> value/100)
    let obj2 = filterKeys(nutritionDB, (key)=> Object.keys(obj1).includes(key))
    let result = 0
    let obj3 = Object.entries(obj2)
    obj3.forEach(object =>{
        result += Object.entries(filterKeys(object[1], key => key == "calories"))[0][1]*obj1[object[0]]
    })
    return result
} 

const lowCarbs = obj => filterValues(obj, (key, value) => ((value/100)*nutritionDB[key].carbs) < 50)
const cartTotal = obj => filterKeys(nutritionDB, (key, value) => obj[key] !== undefined)
