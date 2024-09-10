const fusion = (...objs) =>{
    let result = {}    
    for (let i=0; i<objs.length;i++){        
        let ob = Object.entries(objs[i])        
        ob.forEach(([key, value]) => {            
            if (result[key] == undefined){
                result[key] = value
            }else{
                switch(value.constructor){
                    case Array:
                        if (value.constructor !== result[key].constructor){
                            result[key] = value
                            break;
                        }          
                        result[key] = [...result[key], ...value]
                        break;
                    case Number:
                        if (value.constructor !== result[key].constructor){
                            result[key] = value
                            break;
                        }
                        result[key] += value
                        break;
                    case String:
                        if (value.constructor !== result[key].constructor){
                            result[key] = value
                            break;
                        }
                        result[key] += " " + value 
                        break;
                    case Object:
                        if (value.constructor !== Array){     
                            if (value.constructor !== result[key].constructor){
                                result[key] = value
                                break;
                            }                   
                            result[key] = fusion(result[key], value)
                        }  
                        break;                      
                }
            }        
        }); 
    }
    return result
}

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }))
// console.log(fusion({ str: "salem" }, { str: "alem" }))
// console.log(fusion({ str: "salem" }, { str: "" }))
// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))
// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))
// console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }))
console.log(fusion({ a: "hello", b: [] }, { a: 4 }))
// console.log([2].constructor === String)

const obj = { a: 1, b: 2, c: 3, a: 6};
const obj1 = { arr: [], arr1: [5] }
const obj2 = { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }

const obj3 = { a: { 
    b: [3, 2], 
    c: { 
        d: 8
     } 
    } 
}
const obj4 = { a: { 
    b: [0, 3, 1], 
    c: { 
        d: 3 
    } 
} 
}

const obj5 = { 
    a: { 
        b: [ 3, 2, 0, 3, 1 ], 
        c: { 
            d: 11 
        } 
    } 
}


let ar1 = [5,6]
let ar2 = [7,8,9]
let ar3 =[10,11]
// console.log([...ar1,...ar2,...ar3])

let emp = {}
let test = 1
emp.test = "hello"
// console.log(emp)
// console.log(test.constructor == Number)
// console.log(Object.keys(obj))
// console.log(obj.a)

