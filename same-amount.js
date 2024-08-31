function sameAmount(str, reg1, reg2){
    reg1 = new RegExp(reg1, "g")
    reg2 = new RegExp(reg2, "g") 

    let r1 = str.match(reg1)
    let r2 = str.match(reg2)

    if (r1 == null){
        r1 = []
    }
     
    if (r2 == null){
        r2 = []
    }
    return  r1.length == r2.length
}

// console.log(!sameAmount("hello there, here are you", /h/, /w/))