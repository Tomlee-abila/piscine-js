const invert = obj =>{
    let keys = Object.keys(obj)
    let values = Object.values(obj)

    let arr = []
    for (let i=0;i<keys.length; i++){
        keys[i]
        values[i]
        arr.push([values[i], keys[i]])
    }

    return Object.fromEntries(arr)
}

console.log(invert({ a: 1, b: 2, c: 3 }))