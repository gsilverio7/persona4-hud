var myVar = setInterval(dayFunction, 1000);

function dayFunction() {
    var watch = new Date();

    var daynumber = watch.getDay();
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var wday = week[daynumber];
    document.getElementById('day').innerHTML = wday;
    
    var date = watch.getDate();
    var month = watch.getMonth();
    month = month + 1;
    if (date < 10) {date = "0" + date}
    if (month < 10) {month = "0" + month}
    document.getElementById('ddate').innerHTML = month + "/" + date;

    var daysections = ['Early Morning', 'Morning', 'Lunch', 'Afternoon', 'Evening'];
    var hour = watch.getHours();

    var hourtext = '';
    if (hour < 6) {hourtext = daysections[0]};
    if (hour > 5) {hourtext = daysections[1]};
    if (hour > 11) {hourtext = daysections[2]};
    if (hour > 13) {hourtext = daysections[3]};
    if (hour > 17) {hourtext = daysections[4]};
    document.getElementById('horario').innerHTML = hourtext;

    // Provisório
    if (hour < 17 && hour > 5) {
        document.getElementById('clima').classList.add('sun');
        document.getElementById('clima').classList.remove('moon');
    } else {
        document.getElementById('clima').classList.add('moon');
        document.getElementById('clima').classList.remove('sun');
    }
}

