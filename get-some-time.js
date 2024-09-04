function firstDayWeek(wNumber, year) {
    
    if (wNumber < 1 || wNumber > 53) {
        return 'Invalid week number';
    }

    
    var weekOneDate = new Date(`${year}-01-01`);
    console.log(weekOneDate.toString())

    
    var dayOfWeek = weekOneDate.getDay(); 
    var daysToAdd = (1 - dayOfWeek + 7) % 7;
    var firstMonday = new Date(weekOneDate.setDate(weekOneDate.getDate() + daysToAdd));
    console.log(firstMonday.toString())
    
    var dateOfWeek = new Date(firstMonday);
    dateOfWeek.setDate(firstMonday.getDate() + (wNumber - 1) * 7);
    if (wNumber == 1){
        dateOfWeek = new Date(`${year}-01-01`);
    }
    
    var day = String(dateOfWeek.getDate()).padStart(2, '0');
    var month = String(dateOfWeek.getMonth() + 1).padStart(2, '0');
    var yearFormatted = dateOfWeek.getFullYear();
    

    return `${day}-${month}-${yearFormatted}`;
}


console.log(firstDayWeek(1, '1000')); 
