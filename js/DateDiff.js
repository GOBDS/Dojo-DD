function DateDiff() {
}

DateDiff.diff = function (date1Str, date2Str) {

	let date1 = DateDiff.parseData(date1Str)
	let date2 = DateDiff.parseData(date2Str)

	let result = {
		months: date2.month - date1.month,
		years: date2.year - date1.year
	};

	if (result.years > 0 && date1.month > date2.month) {
		result.years--;
		result.months = 12 - date1.month + date2.month;
	}

	if (result.months > 0 && date1.day > date2.day) {
		result.months--;
	}
	
	return result;
	//return { years: 3, months: 2, days: 1, hours: 4, minutes: 5 };
};


DateDiff.parseData = function (dateStr) {
	let dataAndTime = dateStr.split(' ');

	let data = dataAndTime[0].split('/');
	let time = dataAndTime[1].split(':');

	return {
		day: parseInt(data[0]),
		month:parseInt(data[1]),
		year:parseInt(data[2]),
		hour: parseInt(time[0]),
		minutes:parseInt(time[1]),
	}
}

/*
 * @return A number between 0 (inclusive) and 11 (inclusive).
 */
DateDiff.diffInMonths = function (date1Str, date2Str) {

	return DateDiff.diff(date1Str, date2Str).months;
};

/*
 * @return A number not negative.
 */
DateDiff.diffInYears = function (date1Str, date2Str) {

	return DateDiff.diff(date1Str, date2Str).years;
};
