function get(src, path){
    let arr = path.split(".")
    let result
    if (src[arr[0]] == undefined){
        return undefined
    }
    if (arr.length > 1){
        src = src[arr[0]]
        result = get(src, arr.slice(1).join("."))
    }else{
        return src[arr[0]]
    }
    return result
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'


// console.log(get(src,"hello.there"))
console.log(get(src, path))
// console.log(src["k"])
// console.log(get({ nested: { key: 'value' } }, 'nx.nx'))