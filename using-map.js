const citiesOnly = (arrOb) => arrOb.map((ob)=> ob.city)

const upperCasingStates = (arrStr) => arrStr.map((str) => {
    let result = ""
    for (let i = 0; i < str.length; i++){
        if (i == 0){
            result += str[i].toUpperCase()
        }else if (str[i] == " "){
            result += str[i]
            result += str[i+1].toUpperCase()
            i++
        }else{
            result += str[i]
        }
    }
    return result
})
const strUpper = (str) =>{
    let result = ""
    for (let i = 0; i < str.length; i++){
        if (i == 0){
            result += str[i].toUpperCase()
        }else if (str[i] == " "){
            result += str[i]
            result += str[i+1].toUpperCase()
            i++
        }else{
            result += str[i]
        }
    }
    return result
}

const fahrenheitToCelsius = (arrF) => arrF.map((F) => String(Math.floor(((Number(F.slice(0, F.length-2))-32)*(5/9)))) + "°C")
const trimTemp = (arrOb) => arrOb.map((Ob) => {
    Ob.temperature = Ob.temperature.split("").map((ch) => ch == ' ' ? '': ch).join('')
    return Ob
})

const tempForecasts = (arrOb) => {
    var newArrOb = trimTemp(arrOb)

    return newArrOb.map((Ob) => {
        return String(Math.floor(((Number(Ob.temperature.slice(0, Ob.temperature.length-2))-32)*(5/9)))) + `°Celsius in ${Ob.city}, ${strUpper(Ob.state)}`
    })
}