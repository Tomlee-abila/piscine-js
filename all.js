const all = (obj)=>{
    let keys = Object.keys(obj)
    if (obj == {})return obj
    result = []
    for (let i = 0; i < keys.length; i++){        
        result.push(obj[keys[i]]())
    }
    return result
}

// console.log(all({hello: ()=> "hello"}))
// console.log(all({}))
