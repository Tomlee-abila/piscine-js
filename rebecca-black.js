const isFriday = (date) => date.getDay() == 5
const isWeekend = (date) => (date.getDay() == 7 || date.getDay() == 0)
const isLeapYear = (date) => date.getFullYear()%4 == 0
const isLastDayOfMonth = (date) => {
    var onday = 86400000
    var orMonth = date.getMonth()
    var newDate = new Date(date.getTime()+onday)
    return newDate.getMonth() == orMonth

}