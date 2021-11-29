function ageCalculator(year, month, date) {
  var date1 = new Date();
  date1.setFullYear(year);
  date1.setMonth(month);
  date1.setDate(date);
  var date2 = new Date();
  let timeDifference = Math.abs(date1.getTime() - date2.getTime());
  var days = Math.floor(timeDifference / (1000 * 3600 * 24));
  return Math.floor(days / 365.25);
}

console.log(ageCalculator(1990, 01, 01));
