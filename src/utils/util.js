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
  let diffInSeconds = Math.abs(date2.getTime() - date1.getTime()) / 1000;

  const years = Math.floor(diffInSeconds / 31536000);
  diffInSeconds -= years * 31536000;

  const months = Math.floor(diffInSeconds / 2592000);
  diffInSeconds -= months * 2592000;

  const days = Math.floor(diffInSeconds / 86400);

  return { years, months, days };
}

export function calcAgeByBirth(birth) {
  const year = parseInt(birth.year);
  const month = parseInt(birth.month);
  const day = parseInt(birth.day);
  const todate = new Date();
  const birthDate = new Date(year, month - 1, day);

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
  let userDate = new Date(numYear, numMonth - 1, numDay);

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
