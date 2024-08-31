function ionOut(str) {
    const reg = /\w*(t)(?=ion)/g
    return str.match(reg) == null ? [] : str.match(reg)
}

// console.log(ionOut("The iontfat cat iontsat on tionthe miontat."))
console.log(ionOut('attention, directionss'))