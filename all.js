const all = (obj)=>{
    vales = Object.values(obj)
    keys = Object.keys(obj)

    result = {}
    for (let i = 0; i < vales.length; i++){
        vales[i].then(value =>{
            result[key[i]] = value
        })        
    }
    return result
}