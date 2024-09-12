const deepCopy = (obj) =>{
    if (obj == undefined || obj == null || (obj.constructor !== Array || obj.constructor !== Object)){
        return obj
    }
    if (obj.constructor == Array){
        let result = []
        obj.forEach(arr => {
            let arrR
            if (arr == undefined){
                result.push(arr)
            }else{
                switch(arr.constructor){                
                    case Array:
                        arrR = deepCopy(arr)
                       break
                    case Object:
                        arrR = deepCopy(arr)
                        break
                    default:
                        arrR = arr
                }
                result.push(arrR)
            }
            
        })
        return result
    }else{
        let result = {}
        let arr = Object.entries(obj)
        
        arr.forEach(([key, value]) => {
            let valuer = value
            if (value == undefined){
                result[key] = valuer
            }else{
                switch(value.constructor){
                    case Array:
                    valuer = deepCopy(value)
                    break
                    case Object:
                        valuer = deepCopy(value)
                        break
                    default:
                        valuer = value
                }
                result[key] = valuer
            }
            
        })
        return result
    }
}
// console.log(deepCopy({2:3,4:5,7:6}))
// const r = Math.random()
//   const obj = [r, Object.freeze([r, Object.freeze([r])])]
//   const copy = deepCopy(obj)
//   console.log(copy)
//   console.log(obj)
// //   eq(copy, obj)
//   console.log(obj[1][1] === obj[1][1])
// console.log(deepCopy(2))