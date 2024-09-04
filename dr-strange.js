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
    return arr1[day]
}

function timeTravel(object){
    object.date.setHours(object.hour);
    object.date.setMinutes(object.minute);
    object.date.setSeconds(object.second);
    return new Date(object.date)
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
  )

//   Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
// console.log(new Date('2020-05-29 23:25:22').getMilliseconds())