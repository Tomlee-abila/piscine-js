const letterSpaceNumber = (str) =>{
    const reg = /([a-zA-Z_])[ ]([0-9][^\d])/g
    const myArray = str.match(reg);
    return myArray
}
// console.log('example 1, \p{Z}example 20')
console.log(letterSpaceNumber('example 1, example 20'))