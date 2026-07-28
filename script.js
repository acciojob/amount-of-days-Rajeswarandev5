//your JS code here. If required.
function daysOfAYear(year){
	if(year % 400){
		return 366;
	} else if (year % 100){
		return 365;
	} else if (year % 4){
		return 366;
	} else {
		return 365;
	}
}