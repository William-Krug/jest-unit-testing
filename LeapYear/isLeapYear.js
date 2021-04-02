/**
 * Checks whether the passed year is a leap year.
 *
 * Returns true if the year provided is a leap year.
 *
 * @param {number} year year to be checked if it is a leap year or not
 * @return {boolean}
 */
function isLeapYear(year) {
  // Check for missing argument
  if (year === undefined) {
    throw new Error(`No argument passed. Please enter a year`);
  }

  // Check if a string was passed
  if (typeof year === 'string') {
    if (typeof Number(year) === 'number') {
      if (Number(year) % 400 === 0) {
        return true;
      } else if (Number(year) % 100 === 0) {
        return false;
      } else if (Number(year) % 4 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error(`Invalid argument passed. Please enter a year.`);
    }
  }

  // Determine if leap year
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isLeapYear;
