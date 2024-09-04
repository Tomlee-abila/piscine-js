function firstDayWeek(wNumber, year) {
    
    if (wNumber < 1 || wNumber > 53) {
        return 'Invalid week number';
    }

    
    var weekOneDate = new Date(`${year}-01-01`);

    
    var dayOfWeek = weekOneDate.getDay(); 
    var daysToAdd = (1 - dayOfWeek + 7) % 7;
    var firstMonday = new Date(weekOneDate.setDate(weekOneDate.getDate() + daysToAdd));

    
    var dateOfWeek = new Date(firstMonday);
    dateOfWeek.setDate(firstMonday.getDate() + (wNumber - 1) * 7);

    
    var day = String(dateOfWeek.getDate()).padStart(2, '0');
    var month = String(dateOfWeek.getMonth() + 1).padStart(2, '0');
    var yearFormatted = dateOfWeek.getFullYear();

    return `${day}-${month}-${yearFormatted}`;
}


console.log(firstDayWeek(10, 2013)); 
