const letterSpaceNumber = (str) =>{
    const reg = /[a-z][ ]\b\d{1}\b/g
    // const reg = /([a-zA-Z_])[ ]([\d{1}])/g
    const myArray = str.match(reg);
    return myArray
}
// console.log('example 1, \p{Z}example 20')
console.log(letterSpaceNumber('example 1, example 20'))
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))