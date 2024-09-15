const all = (obj)=>{
    values = Object.values(obj)
    keys = Object.keys(obj)
    if (obj.length == 0)return obj
    let t = "hello"
    result = {}
    for (let i = 0; i < values.length; i++){        
        result[keys[i]] = obj[keys[i]]()
    }
    return result
}

// console.log(all({hello: ()=> "hello"}))
// // console.log(all({}))
