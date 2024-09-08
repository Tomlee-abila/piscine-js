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
    for (let i=0; i<colors.length;i++){
        let div = document.createElement("div")
        div.className = colors[i]
        div.innerHTML = colors[i]
        document.body.append(div)
    }
}

export const choseShade = (shade)=>{
    let divs = document.getElementsByTagName("div")
    console.log(shade)
    console.log(divs)
    for (let i=0; i<divs.length;i++){
        divs[i].className = shade
    }

}