const verydisco = word =>{
    const wordArr = word.split("")
    let count = Math.ceil(word.length/2)
    let i = 0
    let w1 = ""
    let w2 = ""

    wordArr.forEach(letter =>{
        if (i < count){
            w1 += String(letter)
        }else{
            w2 += String(letter)
        }
        i++      
    })
    return w2+w1
}
const word = process.argv[2]
let answer = ""

if (word.includes(" ")){
    let answer1 = []
    const wordArr = word.split(" ")
    wordArr.forEach(element=> {
        answer1.push(verydisco(element))
    })
    answer = answer1.join(' ')
}else{
    answer = verydisco(word)
}

console.log(answer)
