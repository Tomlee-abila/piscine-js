function dayOfTheYear(date){
    var year = date.getFullYear()
    var newDate = new Date(`${year}-02-01`)
    var count = 31
    var month = newDate.getMonth()

    while (month != 0){
        count++
        newDate = new Date(newDate.getTime()+86400000)
        month = newDate.getMonth()
    }
    return count
}
console.log(dayOfTheYear(new Date("2013-09-01")))