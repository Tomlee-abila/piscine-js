import {colors} from "./fifty-shades-of-cold.data.js"
export const generateClasses = () =>{
    let css = ""
    let head = document.getElementsByTagName("head")[0]
    let style = document.createElement("style")
    for (let i=0; i<colors.length;i++){
        css += `.${colors[i]} { background : ${colors[i]};} \n`
    } 
    style.textContent = css
    head.append(style)

}

export const generateColdShades = () =>{
    let shades = ["aqua","blue", "turquoise", "green", "cyan", "navy", "purple"]
    let arr = colors.filter(color => shades.some(shade => color.includes(shade)))
    for (let i=0; i<arr.length;i++){
        let div = document.createElement("div")
        div.className = arr[i]
        div.innerHTML = arr[i]
        document.body.append(div)
    }
}

export const choseShade = (shade)=>{
    let divs = document.getElementsByTagName("div")
    for (let i=0; i<divs.length;i++){
        divs[i].className = shade
    }

}