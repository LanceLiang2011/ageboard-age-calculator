export const COLORS = {
  purple: "hsl(259, 100%, 65%)",
  lightRed: "hsl(0, 100%, 67%)",
  white: "hsl(0, 0%, 100%)",
  OffWhite: "hsl(0, 0%, 94%)",
  lightGrey: "hsl(0, 0%, 86%)",
  smokeyGrey: "hsl(0, 1%, 44%)",
  offBlack: "hsl(0, 0%, 8%)",
};

function dateDiff(date1, date2) {
  let years, months, days;

  // Calculate difference in years
  years = date2.getFullYear() - date1.getFullYear();

  // Calculate difference in months
  months = date2.getMonth() - date1.getMonth();
  if (months < 0) {
    years--; // Borrow from years if it's negative
    months += 12; // Adding 12 because there are 12 months in a year
  }

  // Calculate difference in days
  days = date2.getDate() - date1.getDate();
  if (days < 0) {
    months--; // Borrow from months if it's negative
    let newDate = new Date(date2.getFullYear(), date2.getMonth(), 0); // Get the last day of previous month
    days += newDate.getDate(); // Adding because days are negative
  }

  return { years, months, days };
}

export function calcAgeByBirth(birth) {
  const year = parseInt(birth.year);
  const month = parseInt(birth.month);
  const day = parseInt(birth.day);
  const todate = new Date();
  const birthDate = new Date(year, month, day);

  return dateDiff(birthDate, todate);
}

export function testDay(day) {
  let numDay = Number(day);
  if (isNaN(numDay)) return false;
  // Check if the day is between 1 and 31
  if (numDay < 1 || numDay > 31) {
    return false;
  }
  return true;
}
export function testMonth(month) {
  let numMonth = Number(month);
  if (isNaN(numMonth)) return false;

  // Check if the month is between 1 and 12
  if (numMonth < 1 || numMonth > 12) {
    return false;
  }
  return true;
}
export function testYear(year) {
  let numYear = Number(year);
  if (isNaN(numYear)) return false;

  // Check if the year is not in the future
  let currentYear = new Date().getFullYear();
  if (numYear > currentYear) {
    return false;
  }
  return true;
}

export function testCombination({ year, month, day }) {
  let numYear = Number(year);
  let numMonth = Number(month);
  let numDay = Number(day);

  let currentDate = new Date();
  let userDate = new Date(numYear, numMonth, numDay);

  if (userDate - currentDate > 0) return false;

  // Special case for February
  if (numMonth === 2) {
    if (
      (numYear % 400 === 0 || (numYear % 100 !== 0 && numYear % 4 === 0)) &&
      numDay > 29
    ) {
      return false; // leap year, February has 29 days
    } else if (numDay > 28) {
      return false; // non-leap year, February has 28 days
    }
  }

  // Check for months with 30 days
  let thirtyDaysMonths = [4, 6, 9, 11];
  if (thirtyDaysMonths.includes(numMonth) && numDay > 30) {
    return false;
  }

  // If all checks passed, the date is valid
  return true;
}
