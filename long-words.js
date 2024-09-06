const isStr5 = (input) =>{
    return typeof input == "string" && input.length >= 5
} 

const longWords = (arr) => arr.every(isStr5)
const oneLongWord = (arr) => arr.some((input)=> typeof input == "string" && input.length >= 10)
const noLongWords = (arr) => arr.every((input) => !(typeof input == "string" && input.length >= 7))