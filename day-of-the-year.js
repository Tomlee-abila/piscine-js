function dayOfTheYear(date){
    var year = date.getFullYear()
    const yearStr = year.toString().padStart(4, '0');
    var month = date.getMonth()
    var day = date.getDay()
    console.log("day:",day,"\nmonth:",month,"\nyear:",year)

    var newDate = new Date(`${yearStr}-01-01`)
    console.log(newDate.toString())
    console.log(date.toString())
    var count = 1
    while (!(date.toString() === newDate.toString())){
        count++
        newDate = new Date(newDate.getTime()+86400000)
    }
    return count
}

console.log(dayOfTheYear(new Date("0001-01-01")))