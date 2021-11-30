function ageCalculator(year, month, date) {
  let desiredDate = new Date();
  desiredDate.setFullYear(year);
  desiredDate.setMonth(month);
  desiredDate.setDate(date);
  let currentDate = new Date();
  let timeDifference = Math.abs(currentDate.getTime() - desiredDate.getTime());
  let totalDaysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  return Math.floor(totalDaysDifference / 365.25);
}

console.log(ageCalculator(1990, 1, 1));

