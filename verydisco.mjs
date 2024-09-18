const verydisco = (word) =>{
    const count = Math.ceil(word.length/2)
    return word.slice(count) + word.slice(0, count)
}

const verydiscoInput = (input) => input.includes(" ") ? input.split(" ").map(element => verydisco(element)).join(" ") : verydisco(input)

let wordInput = process.argv[2]

console.log(verydiscoInput(wordInput))