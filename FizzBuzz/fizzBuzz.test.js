const fizzBuzz = require('./fizzBuzz.js');

describe('the fizzBuzz function', () => {
  /*
    Happy Path
  */
  test('should return "Fizz" when passed a multiple of 3', () => {
    const result = fizzBuzz(171);
    expect(result).toBe('Fizz');
  });

  test('should return "Buzz" when passed a multiple of 5', () => {
    const result = fizzBuzz(200);
    expect(result).toBe('Buzz');
  });

  test('should return "FizzBuzz" when passed a multiple of 3 and 5 (15)', () => {
    const result = fizzBuzz(300);
    expect(result).toBe('FizzBuzz');
  });

  test('should return the original number when not a multiple of 3 or 5', () => {
    const result = fizzBuzz(23);
    expect(result).toBe(23);
  });

  /*
    Bad Input Path
  */
  test('should return "Fizz" when passed a multiple of 3 as a string', () => {
    const result = fizzBuzz('69');
    expect(result).toBe('Fizz');
  });

  test('should return "Buzz" when passed a multiple of 5 as a string', () => {
    const result = fizzBuzz('55');
    expect(result).toBe('Buzz');
  });

  test('should return "FizzBuzz" when passed a multiple of 3 and 5 (15) as a string', () => {
    const result = fizzBuzz('45');
    expect(result).toBe('FizzBuzz');
  });

  test('should return the original number when not a multiple of 3 or 5 as a string', () => {
    const result = fizzBuzz('77');
    expect(result).toBe(77);
  });

  test('should fail if given a letter character or string', () => {
    expect(() => {
      fizzBuzz('happy');
    }).toThrow(`Invalid argument passed. Please enter a number.`);
  });

  /*
    Missing Input Path
  */
  test('should fail if given no arguments', () => {
    expect(() => {
      fizzBuzz();
    }).toThrow(`No argument passed. Please enter a number.`);
  });
});
