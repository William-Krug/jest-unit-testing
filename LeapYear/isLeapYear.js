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

  // If the string is a word (eg. 'happy')
  const convertedYear = Number(year);

  if (isNaN(convertedYear)) {
    throw new Error(`Invalid argument passed. Please enter a year.`);
  }

  // Determine if leap year
  if (Number(year) % 400 === 0) {
    return true;
  } else if (Number(year) % 100 === 0) {
    return false;
  } else if (Number(year) % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isLeapYear;
