const array1 = [1, 2, 3, 5, 8];
// const iniValue = 0
const adder = (arr, iniValue = 0) => arr.reduce((accValue, currValue)=> accValue + currValue, iniValue)
console.log(adder(array1))

const sumOrMul = (arr, iniValue = 0) => arr.reduce((accValue, currValue) => currValue%2 == 0 ? currValue * accValue : currValue + accValue, iniValue)
console.log(sumOrMul(array1, 5))

const funcExec = (arr, iniValue = 0) => arr.reduce((accValue, currFunct)=> currFunct(accValue), iniValue)