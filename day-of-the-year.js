function dayOfTheYear(date){
    var year = date.getFullYear()
    var newDate = new Date(`${year}-01-01`)
    var count = 1
    while (!(date.toString() === newDate.toString())){
        count++
        newDate = new Date(newDate.getTime()+86400000)
    }
    return count
}