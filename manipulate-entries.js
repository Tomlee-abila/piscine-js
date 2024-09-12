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

function reduceEntries(obj, reducer, initialValue) {
    let accumulator = initialValue;
    const entries = Object.entries(obj);
    
    for (const [key, value] of entries) {
      accumulator = reducer(accumulator, [key, value]);
    }
    
    return accumulator;
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
        result[key] = func([key,value])
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
    let obj1 = mapValues(obj, ([key, value])=> value/100)
    let obj2 = filterKeys(nutritionDB, (key)=> Object.keys(obj1).includes(key))
    let result = 0
    let obj3 = Object.entries(obj2)
    obj3.forEach(object =>{
        result += Object.entries(filterKeys(object[1], key => key == "calories"))[0][1]*obj1[object[0]]
    })
    return parseFloat(result.toFixed(1));
} 

// const lowCarbs = obj => filterValues(obj, (key, value) => ((value/100)*nutritionDB[key].carbs) < 50)
// const cartTotal = obj => mapValues(filterKeys(nutritionDB, (key, value) => obj[key] !== undefined), ([key, value]) => mapValues(value, ([key2, value2])=> Number(parseFloat(value2*(obj[key]/100)).toFixed(1))))
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }
// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log(cartTotal(groceriesCart))
  