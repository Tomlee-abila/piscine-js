function matchCron(cronString, date) {
    const [cronMin, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronString.split(' ');
    
    const minute = date.getUTCMinutes();
    const hour = date.getUTCHours();
    const dayOfMonth = date.getUTCDate();
    const month = date.getUTCMonth() + 1; 
    const dayOfWeek = (date.getUTCDay() + 1) % 7 || 7; 
    
    
    const matchesPattern = (pattern, value) => {
        return pattern === '*' || pattern === String(value);
    };

    
    return matchesPattern(cronMin, minute) &&
           matchesPattern(cronHour, hour) &&
           matchesPattern(cronDayOfMonth, dayOfMonth) &&
           matchesPattern(cronMonth, month) &&
           matchesPattern(cronDayOfWeek, dayOfWeek);
}

