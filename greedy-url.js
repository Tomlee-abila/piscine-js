const getURL = (str) =>{
    const reg = /(https?:\/\/)[\w.\/\S]+/g
    let result = str.match(reg)
    return result
}

const greedyQuery = (str) =>{
    const reg = /(https?:\/\/)[\w.\/\S]+/g
    let result = str.match(reg)
    return result
}

// const dataSet = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"
// console.log(greedyQuery(dataSet))