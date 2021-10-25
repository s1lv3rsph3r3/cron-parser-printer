const definitions = require('../../src/definitions');

describe('Test definitions for cron', () => {
  beforeAll(() => {});
  test('should contain all applicable parts of cron', async () => {
    const expectedArray = [
      'minute',
      'hour',
      'dayOfMonth',
      'month',
      'dayOfWeek',
      'fullFormat',
    ];
    expect(Object.keys(definitions)).toEqual(expectedArray);
  });

  test('should expect all cron parts to follow consistent structure', async () => {
    const cronPieces = ['minute', 'hour', 'dayOfMonth', 'month', 'dayOfWeek'];
    const expectedArray = ['name', 'allowedValues', 'specialValues'];
    cronPieces.forEach((p) => {
      // Expect the structure to be the same across all defined pieces in cronPieces
      expect(Object.keys(definitions[`${p}`])).toEqual(expectedArray);
    });
  });
});

describe('Test minute definition of cron', () => {
  beforeAll(() => {});
  test('should define suitable allowed values for minutes', async () => {
    const expectedArray = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
      '32',
      '33',
      '34',
      '35',
      '36',
      '37',
      '38',
      '39',
      '40',
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
      '47',
      '48',
      '49',
      '50',
      '51',
      '52',
      '53',
      '54',
      '55',
      '56',
      '57',
      '58',
      '59',
    ];
    expect(definitions.minute.allowedValues).toEqual(expectedArray);
  });
  test('should define suitable allowed special values for minutes', async () => {
    const expectedArray = ['*', '/', ',', '-'];
    expect(definitions.minute.specialValues).toEqual(expectedArray);
  });
});

describe('Test hour definition of cron', () => {
  beforeAll(() => {});
  test('should define suitable allowed values for hours', async () => {
    const expectedArray = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
    ];
    expect(definitions.hour.allowedValues).toEqual(expectedArray);
  });
  test('should define suitable allowed special values for hours', async () => {
    const expectedArray = ['*', '/', ',', '-'];
    expect(definitions.hour.specialValues).toEqual(expectedArray);
  });
});

describe('Test day of month definition of cron', () => {
  beforeAll(() => {});
  test('should define suitable allowed values for day of month', async () => {
    const expectedArray = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ];
    expect(definitions.dayOfMonth.allowedValues).toEqual(expectedArray);
  });
  test('should defined suitable allowed special values for day of month', async () => {
    const expectedArray = ['*', '/', ',', '-'];
    expect(definitions.dayOfMonth.specialValues).toEqual(expectedArray);
  });
});

describe('Test month definition of cron', () => {
  beforeAll(() => {});
  test('should define suitable allowed values for month', async () => {
    const expectedArray = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ];
    expect(definitions.month.allowedValues).toEqual(expectedArray);
  });
  test('should define suitable allowed special values for month', async () => {
    const expectedArray = ['*', '/', ',', '-'];
    expect(definitions.month.specialValues).toEqual(expectedArray);
  });
});

describe('Test day of week definition of cron', () => {
  beforeAll(() => {});
  test('should define suitable allowed values for day of week', async () => {
    const expectedArray = ['1', '2', '3', '4', '5', '6', '7'];
    expect(definitions.dayOfWeek.allowedValues).toEqual(expectedArray);
  });
  test('should define suitable allowed special values for day of week', async () => {
    const expectedArray = ['*', '/', ',', '-'];
    expect(definitions.dayOfWeek.specialValues).toEqual(expectedArray);
  });
});
