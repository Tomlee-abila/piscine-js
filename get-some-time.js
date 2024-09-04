function firstDayWeek(wNumber, year) {
    
    if (wNumber < 1 || wNumber > 53) {
        return 'Invalid week number';
    }
    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const millisecondsPerDay = millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay;


    
    var weekOneDate = new Date(`${year}-01-01`);
    console.log("Original Date:",weekOneDate.toString())
    
    var dayOfWeek = weekOneDate.getDay(); 
    var daysToAdd = (1 - dayOfWeek + 7) % 7;
    var firstMonday = new Date(weekOneDate.setDate(weekOneDate.getDate() + daysToAdd));
    console.log(" first monday:", firstMonday.toString())
    var sub = 1
    if (Number(year) < 1970){
        sub = 2
    }
    var add = (wNumber - sub) * 7 * millisecondsPerDay
    var dateOfWeek = new Date(firstMonday.getTime() + add);
    console.log("       Answer:",dateOfWeek.toString())

    if (wNumber == 1){
        dateOfWeek = new Date(`${year}-01-01`);
    }
    
    var day = String(dateOfWeek.getDate()).padStart(2, '0');
    var month = String(dateOfWeek.getMonth() + 1).padStart(2, '0');
    var yearFormatted = String(dateOfWeek.getFullYear()).padStart(4, '0');
    
    return `${day}-${month}-${yearFormatted}`;
}


console.log(firstDayWeek(52, '1000')); 


