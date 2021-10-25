const expressions = require('../../src/expressions');

describe('Test expressions => timeDigit', () => {
  beforeAll(() => {});
  test('should return a match when single digit', async () => {
    const expectedMatch = ['1'];
    const input = '1';
    expect(input.match(expressions.timeDigit).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return a match when double digit', async () => {
    const expectedMatch = ['33'];
    const input = '33';
    expect(input.match(expressions.timeDigit).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return null for triple digit', async () => {
    const input = '3333';
    expect(input.match(expressions.timeDigit)).toBeNull();
  });
});

describe('Test expressions => timeDigitWithInterval', () => {
  beforeAll(() => {});
  test('should return a match when n/k', async () => {
    const expectedMatch = ['2/2'];
    const input = '2/2';
    expect(input.match(expressions.timeDigitWithInterval).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return null when n/', async () => {
    const input = '4/';
    expect(input.match(expressions.timeDigitWithInterval)).toBeNull();
  });
  test('should return null when n/0', async () => {
    const input = '4/0';
    expect(input.match(expressions.timeDigitWithInterval)).toBeNull();
  });
});

describe('Test expressions => timeRange', () => {
  beforeAll(() => {});
  test('should return a match when n-k', async () => {
    const expectedMatch = ['5-6'];
    const input = '5-6';
    expect(input.match(expressions.timeRange).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return null when n', async () => {
    const input = '2';
    expect(input.match(expressions.timeRange)).toBeNull();
  });
  test('should return null when n-k-m', async () => {
    const input = '4-5-6';
    expect(input.match(expressions.timeRange)).toBeNull();
  });
});

describe('Test expressions => timeRangeWithInterval', () => {
  beforeAll(() => {});
  test('should return a match when n-k/i', async () => {
    const expectedMatch = ['1-10/2'];
    const input = '1-10/2';
    expect(input.match(expressions.timeRangeWithInterval).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return null when n-k', async () => {
    const input = '1-10';
    expect(input.match(expressions.timeRangeWithInterval)).toBeNull();
  });
  test('should return null when k/i', async () => {
    const input = '4/6';
    expect(input.match(expressions.timeRangeWithInterval)).toBeNull();
  });
});

describe('Test expressions => wildCardInterval', () => {
  beforeAll(() => {});
  test('should return a match when */n', async () => {
    const expectedMatch = ['*/2'];
    const input = '*/2';
    expect(input.match(expressions.wildCardInterval).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return null when */', async () => {
    const input = '*/';
    expect(input.match(expressions.wildCardInterval)).toBeNull();
  });
  test('should return null when /n', async () => {
    const input = '/5';
    expect(input.match(expressions.wildCardInterval)).toBeNull();
  });
});

describe('Test expressions => wildCard', () => {
  beforeAll(() => {});
  test('should return a match when *', () => {
    const expectedMatch = ['*'];
    const input = '*';
    expect(input.match(expressions.wildCard).toString()).toEqual(
      expectedMatch.toString(),
    );
  });
  test('should return null when **', () => {
    const input = '**';
    expect(input.match(expressions.wildCard)).toBeNull();
  });
});
