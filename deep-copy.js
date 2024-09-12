const deepCopy = (obj) =>{
    if (obj.constructor == Array){
        let result = []
        obj.forEach(arr => {
            let arrR
            switch(arr.constructor){                
                case Array:
                   valuer = deepCopy(arr)
                   break
                case Object:
                    valuer = deepCopy(arr)
                    break
                default:
                    arrR = arr
            }
            result.push(arr)
        })
        return result
    }else{
        let result = {}
        let arr = Object.entries(arrR)
        arr.forEach(([key, value]) => {
            let valuer = value
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
//   console.log(obj[1][1] !== copy[1][1])