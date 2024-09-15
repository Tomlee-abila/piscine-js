const all =async (obj = {})=>{
    values = Object.values(obj)
    keys = Object.keys(obj)
    if (obj == {})return {}
    
    result = {}
    for (let i = 0; i < values.length; i++){
        result[keys[i]] = await obj[keys[i]]
    }
    return result
}

console.log(all({hello: ()=>{console.log("hello")}}))