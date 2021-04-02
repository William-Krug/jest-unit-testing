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

  // Check if a string was passed
  if (typeof number === 'string') {
    // If the string is a number (eg. '45')
    if (typeof Number(number) === 'number') {
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

    if (typeof Number(number[0]) === 'number') {
      throw new Error(`Invalid argument passed. Please enter a number.`);
    }

    // throw new Error(`Invalid argument passed. Please enter a number.`);
  }

  // Convert number as necessary
  if (number % 15 === 0) {
    return 'FizzBuzz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else {
    return number;
  }
}

module.exports = fizzBuzz;
