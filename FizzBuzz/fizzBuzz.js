/**
 * Checks whether the passed number is:
 * - a multiple of 3
 * - a multiple of 5
 * - a multiple of 3 and 5 (15)
 *
 * If a number is:
 * - a multiple of 3, 'Fizz' is returned
 * - a multiple of 5, 'Buzz' is return
 * - a multiple of 3 and 5 'FizzBuzz' is return
 * - none of the above, the original number is returned
 *
 * @param {number} number
 */
function fizzBuzz(number) {
  // Check for missing argument
  if (number === undefined) {
    throw new Error(`No argument passed. Please enter a number.`);
  }

  const convertedNumber = Number(number);

  // If the string is a word (eg. 'happy')
  if (isNaN(convertedNumber)) {
    throw new Error(`Invalid argument passed. Please enter a number.`);
  }

  // Convert number as necessary
  if (Number(number) % 15 === 0) {
    return 'FizzBuzz';
  } else if (Number(number) % 5 === 0) {
    return 'Buzz';
  } else if (Number(number) % 3 === 0) {
    return 'Fizz';
  } else {
    return Number(number);
  }
}

module.exports = fizzBuzz;
