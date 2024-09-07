export const generateLetters = () =>{
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let count = 0
    for (let i=0; i<120; i++){
        if (i%3==2){
            count++
        }
        let element = document.createElement("div")
        element.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)]
        element.style.fontSize = `${i+11}px`
        if (i > 0 && i < 40){
            element.style.fontWeight = 300
        }else if (i > 39 && i < 80){
            element.style.fontWeight = 400
        }else{
            element.style.fontWeight = 600
        }
        document.body.append(element)
    }
}