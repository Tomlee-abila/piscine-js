const citiesOnly = (arrOb) => arrOb.map((ob)=> ob.city)

const upperCasingStates = (arrStr) => arrStr.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
// console.log(upperCasingStates(["hello", "there", "how", "are", "you"]))

const fahrenheitToCelsius = (arrF) => arrF.map((F) => String(Math.floor(((Number(F.slice(0, F.length-2))-32)*(5/9)))) + "°C")
// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))
const trimTemp = (arrOb) => arrOb.map((Ob) => {
    Ob.temperature = Ob.temperature.split("").map((ch) => ch == ' ' ? '': ch).join('')
    return Ob
})

// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  10 1 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]))

const tempForecasts = (arrOb) => {
    var newArrOb = trimTemp(arrOb)

    return newArrOb.map((Ob) => {
        return String(Math.floor(((Number(Ob.temperature.slice(0, Ob.temperature.length-2))-32)*(5/9)))) + `°Celsius in ${Ob.city}, ${Ob.state.charAt(0)+Ob.state.slice(1)}`
    })
}

console.log(tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    },
  ]))