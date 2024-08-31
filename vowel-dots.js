const reg = /(a|A|e|E|i|I|o|O|u|U)/g
const vowelDots = (str) =>{     
    return str.replace(reg, "$&.")    
}