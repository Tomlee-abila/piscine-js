function dayOfTheYear(date){
    var year = date.getFullYear()
    var newYear = date.getFullYear()
    var newDate = new Date(`${year}-01-01`)
    var count = 0
    var month = newDate.getMonth()

    while (year == newYear){
        count++
        newDate = new Date(newDate.getTime()+86400000)
        newYear = newDate.getFullYear()
    }
    return count
}
console.log(dayOfTheYear(new Date("0001-01-01")))