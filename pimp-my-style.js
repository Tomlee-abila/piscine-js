import {styles} from "./pimp-my-style.data.js"
let counter = 0
let rev = false
export const pimp = () => {
    let element = document.getElementsByTagName("button")[0];    
    
    if (element.className == "button"){
        element.classList.add(styles[0])
        // rev = false 
        return
    }
    if (rev){
        element.classList.remove(styles[counter-1])
        counter--
        return
    }
    if (counter < styles.length){
        element.classList.add(styles[counter])
    }else{
        rev = true
    }    
    console.log(element.classList)
    counter++
}