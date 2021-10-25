const validation = require('../../src/validation');

describe('Test validation => isCronStringValid()', () => {
  beforeAll(() => {});
  test('should return false when cron string is undefined or null', async () => {
    expect(validation.isCronStringValid(null)).toEqual(false);
    expect(validation.isCronStringValid(undefined)).toEqual(false);
  });
  test('should return false when cron string split has < 6 pieces', async () => {
    const inputString = '* * * * command';
    expect(validation.isCronStringValid(inputString)).toEqual(false);
  });
  test('should return true when cron string split has === 6 pieces', async () => {
    const inputString = '* * * * * command';
    expect(validation.isCronStringValid(inputString)).toEqual(true);
  });
  test('should return true when cron string split has === 6 pieces (bad input)', async () => {
    const inputString = '*  * * * command';
    expect(validation.isCronStringValid(inputString)).toEqual(true);
  });
});

describe('Test validation => containsOnlyAcceptableValues()', () => {
  test('should return false when invalid values are present in the string', async () => {
    const definition = {
      name: 'test-definition',
      allowedValues: ['a', 'b', 'c'],
      specialValues: ['*', '-'],
    };
    const inputString = 'blue';
    expect(
      validation.containsOnlyAcceptableValues(inputString, definition),
    ).toEqual(false);
  });
  test('should return true when only valid values are present in the string', async () => {
    const definition = {
      name: 'test-definition',
      allowedValues: ['a', 'b', 'c'],
      specialValues: ['*', '-'],
    };
    const inputString = 'a*-';
    expect(
      validation.containsOnlyAcceptableValues(inputString, definition),
    ).toEqual(true);
  });
});
