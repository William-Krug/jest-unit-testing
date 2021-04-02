const isLeapYear = require('./isLeapYear.js');

describe('the isLeapYear function', () => {
  /*
    Happy Path
  */
  test('should return true if the passed year is divisible by 400', () => {
    const result = isLeapYear(2000);
    expect(result).toBe(true);
  });

  test('should return true if the passed year is divisible by 4', () => {
    const result = isLeapYear(1984);
    expect(result).toBe(true);
  });

  test('should return false if the passed year is divisible by 100', () => {
    const result = isLeapYear(1900);
    expect(result).toBe(false);
  });

  test('should return false if the passed year is not divisible by 400, 4, or 100', () => {
    const result = isLeapYear(2010);
    expect(result).toBe(false);
  });

  /*
    Bad Input Path
  */
  test('should return true if the passed year is divisible by 400 as a string', () => {
    const result = isLeapYear('2000');
    expect(result).toBe(true);
  });

  test('should return true if the passed year is divisible by 4 as a string', () => {
    const result = isLeapYear('1984');
    expect(result).toBe(true);
  });

  test('should return false if the passed year is divisible by 100 as a string', () => {
    const result = isLeapYear('1800');
    expect(result).toBe(false);
  });

  test('should return false if the passed year is not divisible by 400, 4, or 100 as a string', () => {
    const result = isLeapYear('1985');
    expect(result).toBe(false);
  });

  test('should fail if give a letter character or string', () => {
    expect(() => {
      isLeapYear('happy');
    }).toThrow(`Invalid argument passed. Please enter a year.`);
  });

  /*
    Missing Input Path
  */
  test('should fail if given no arguments', () => {
    expect(() => {
      isLeapYear();
    }).toThrow(`No argument passed. Please enter a year`);
  });
});
