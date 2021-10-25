const parser = require('../../src/parser');

describe('Test parser => parseCronInterval', () => {
  beforeAll(() => {});
  test('should return an integer when interval is defined', async () => {
    const expected = 1;
    const input = 'str/1';
    expect(parser.parseCronInterval(input)).toEqual(expected);
  });
  test('should return NaN when input is not well defined', async () => {
    const input = '';
    expect(parser.parseCronInterval(input)).toEqual(NaN);
  });
});

describe('Test parser => parseCronRange', () => {
  beforeAll(() => {});
  test('should return min/max when ordered range', async () => {
    const expected = { min: 1, max: 5 };
    const input = '1-5';
    expect(parser.parseCronRange(input)).toEqual(expected);
  });
  test('should return min/max when reverse order range', async () => {
    const expected = { min: 1, max: 5 };
    const input = '5-1';
    expect(parser.parseCronRange(input)).toEqual(expected);
  });
  test('should return min/max => NaN when input is not well defined', async () => {
    const expected = { min: NaN, max: NaN };
    const input = 'a-b';
    expect(parser.parseCronRange(input)).toEqual(expected);
  });
});
