const countLeapYears = (date) => {
    let x = date.getFullYear()
    return parseInt((x/400)*97)
}