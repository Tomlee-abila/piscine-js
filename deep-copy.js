const deepCopy = (obj) =>{
    if (obj.constructor == Array){
        let result = []
        obj.forEach(arr => result.push(arr))
        return result
    }else{
        let result = {}
        let arr = Object.entries(obj)
        arr.forEach(([key, value]) => result[key] = value)
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
//   console.log(obj == copy)