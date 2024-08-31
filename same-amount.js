function sameAmount(str, reg1, reg2){
    reg1 = new RegExp(reg1, "g")
    reg2 = new RegExp(reg2, "g")    
    return str.match(reg1).length == str.match(reg2).length
}

// console.log(!sameAmount("hello there, where are you", /h/, /w/))