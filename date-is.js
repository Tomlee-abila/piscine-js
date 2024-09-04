function isValid(date){
    if (date == Date.now()){
        return true
    }
    if (typeof date == "number"){
        return new Date(date) != "Invalid Date"
    }
    if (new Date(date) == "Invalid Date"){
        return false
    }
    
    return date instanceof Date
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
// console.log(isPast(new Date("2020-05-29 21:25:22")))
console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))