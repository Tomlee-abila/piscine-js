function isValid(date){
    return new Date(date) == "Invalid Date" ? false : true
}

function isAfter(Date1, Date2){
    return (new Date(Date1) > new Date(Date2))
}
function isBefore(Date1, Date2){
    return (new Date(Date1) < new Date(Date2))
}
function isFuture(date){
    return isValid(date) && isAfter(date, Date.now())
}
function isPast(date){
    return isValid(date) && isBefore(date, Date.now())
}
// console.log(isPast(new Date("2025-05-29 21:25:22")))
// console.log(isValid(new Date('')))