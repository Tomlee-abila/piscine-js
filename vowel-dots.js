const vowelDots = (str) =>{
     const reg = /(a|A|e|E|i|I|o|O|u|U)/g
    return str.replace(reg, "$&.")
}

console.log(vowelDots("Hello there"))