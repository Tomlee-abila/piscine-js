const reg = /(a|A|e|E|i|I|o|O|u|U)/g
const vowelDots = (str) =>{
    console.log(str)     
     console.log(str.replace(reg, "$&."))
    return str.replace(reg, "$&.")    
}

console.log(vowelDots("Hello there"))