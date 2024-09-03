function addWeek(Date){
    var reg = /\d{2}/
    var arr1 = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"        
    ]
    var arr2 = [
        "secondSunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday"        
    ]
    var actual_day = Date.getDay()   
    var m_value = parseInt(Date.toString().match(reg)[0])%14
    if (m_value > 7){
        return arr2[actual_day]
    }
    // console.log(actual_day)
    return arr1[actual_day]
}

console.log(addWeek(new Date('0001-01-31')))
console.log(addWeek(new Date('0001-01-06')) === 'Saturday')

function timeTravel(object){

}

