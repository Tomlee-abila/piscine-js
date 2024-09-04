function addWeek(inputDate){
    const milliseconds = inputDate - new Date('0001-01-01')
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const days = milliseconds / millisecondsPerDay;
    const day = days%14
    var arr1 = [        
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",        
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday"                 
    ]
    console.log(day)
    return arr1[day]
}

// console.log(new Date('Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)'))
// console.log(new Date('2020-05-29 23:25:22'))
// console.log(addWeek(new Date('2020-05-29')))
// console.log(new Date('2020-05-29 23:25:22').toString())

function timeTravel(object){

}

