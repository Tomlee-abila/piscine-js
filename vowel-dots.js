const vowelDots = (str) =>{
    console.log(str)
     const reg = /(a|A|e|E|i|I|o|O|u|U)/g
     console.log(str.replace(reg, "$&."))
    return str.replace(reg, "$&.")    
}

console.log(vowelDots("Hello there"))