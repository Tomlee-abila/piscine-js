function matchCron(cronString, date) {
    const [cronMin, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronString.split(' ');
    
    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; 
    const dayOfWeek = (date.getDay()); 
    console.log(month)
    
    
    const matchesPattern = (pattern, value) => {
        return pattern === '*' || pattern === String(value);
    };

    
    return matchesPattern(cronMin, minute) &&
           matchesPattern(cronHour, hour) &&
           matchesPattern(cronDayOfMonth, dayOfMonth) &&
           matchesPattern(cronMonth, month) &&
           matchesPattern(cronDayOfWeek, dayOfWeek);
}


console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00'))); 
console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00'))); 
