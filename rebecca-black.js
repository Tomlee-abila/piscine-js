const isFriday = (date) => date.getDay() == 5
const isWeekend = (date) => (date.getDay() == 6 || date.getDay() == 0)
const isLeapYear = (date) => date.getFullYear()%4 == 0
const isLastDayOfMonth = (date) => {
    var onday = 86400000
    var orMonth = date.getMonth()
    console.log(orMonth)
    var newDate = new Date(date.getTime()+onday)
    var newMonth = newDate.getMonth()
    console.log(newMonth)
    return !(orMonth === newMonth)

}

// console.log(isLastDayOfMonth(new Date('2020-02-28')))