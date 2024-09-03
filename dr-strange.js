function addWeek(Date){
    var reg = /\d{2}/
    arr1 = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Satarday"        
    ]
    arr2 = [
        "secondSunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSatarday"        
    ]
    var actual_day = Date.getDay()   
    var m_value = parseInt(Date.toString().match(reg)[0])%14
    if (m_value > 7){
        return arr2[actual_day]
    }
    // console.log(actual_day)
    return arr1[actual_day]
}

console.log(addWeek(new Date('00001-31-01')))

function timeTravel(object){

}

