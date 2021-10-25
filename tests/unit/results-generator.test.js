const resultsGenerator = require('../../src/results-generator');

describe('Test results-generator', () => {
  beforeAll(() => {});
  test('should expect an empty set when interval given is 0', () => {
    const expectedSet = new Set();
    const min = 1;
    const max = 2;
    const interval = 0;
    expect(resultsGenerator.generateNumericalSet(min, max, interval)).toEqual(
      expectedSet,
    );
  });
  test('should return an empty set when min > max', async () => {
    const expectedSet = new Set();
    const min = 10;
    const max = 1;
    const interval = 1;
    expect(resultsGenerator.generateNumericalSet(min, max, interval)).toEqual(
      expectedSet,
    );
  });
  test('should return accurate set with interval of 1', async () => {
    const expectedSet = new Set([1, 2, 3, 4, 5]);
    const min = 1;
    const max = 5;
    const interval = 1;
    expect(resultsGenerator.generateNumericalSet(min, max, interval)).toEqual(
      expectedSet,
    );
  });
  test('should return accurate set with  divisible interval', async () => {
    const expectedSet = new Set([2, 4, 6, 8, 10]);
    const min = 2;
    const max = 10;
    const interval = 2;
    expect(resultsGenerator.generateNumericalSet(min, max, interval)).toEqual(
      expectedSet,
    );
  });
  test('should return accurate set with non-divisible interval', async () => {
    const expectedSet = new Set([2, 5, 8]);
    const min = 2;
    const max = 10;
    const interval = 3;
    expect(resultsGenerator.generateNumericalSet(min, max, interval)).toEqual(
      expectedSet,
    );
  });
});
