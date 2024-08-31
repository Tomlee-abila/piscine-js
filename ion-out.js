function ionOut(str) {
    const reg = /(?<=(ion))(t\w*)/g
    return str.match(reg) == null ? [] : str.match(reg)
}

// console.log(ionOut("The iontfat cat iontsat on tionthe miontat."))