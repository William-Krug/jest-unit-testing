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
  if (number === undefined) {
    throw new Error(``);
  }
  if (Number(number) % 15 === 0) {
    return 'FizzBuzz';
  } else if (Number(number) % 5 === 0) {
    return 'Buzz';
  } else if (Number(number) % 3 === 0) {
    return 'Fizz';
  } else {
    return Number(number);
  }
  // switch (number) {
  //   case Number(number) % 15 === 0:
  //     return 'FizzBuzz';
  //   case Number(number) % 5 === 0:
  //     return 'Buzz';
  //   case Number(number) % 3 === 0:
  //     return 'Fizz';
  //   default:
  //     return Number(number);
  // }
}

module.exports = fizzBuzz;
