/* We support the following <minute> <hour> <day-of-month> <month> <day-of-week> */

/**
 * Declaration for the accepted range and special values
 * used to define a minute definition in cron
 * => range from 0 - 59 (inclusive)
 * @type {{range: string[], specialValues: *[]}}
 */
const minute = {
  name: 'minute',
  allowedValues: [...Array.from(new Array(60).keys(), (x) => x.toString())],
  specialValues: ['*', '/', ',', '-'],
};

/**
 * Declaration for the accepted range and special values
 * used to define an hour definition in cron
 * => range from 0 - 23 (inclusive)
 * @type {{range: *[], specialValues: *[]}}
 */
const hour = {
  name: 'hour',
  allowedValues: [...Array.from(new Array(24).keys(), (x) => x.toString())],
  specialValues: ['*', '/', ',', '-'],
};

/**
 * Declaration for the accepted range and special values
 * used to define the day of month definition in cron
 * => range from 1 - 31 (inclusive)
 * @type {{range: *[], specialValues: *[]}}
 */
const dayOfMonth = {
  name: 'day of month',
  allowedValues: [
    ...Array.from(new Array(31).keys(), (x) => {
      // We only want a range from 1 - 31, not 0 - 31 or 0 - 30
      const v = x + 1;
      return v.toString();
    }),
  ],
  specialValues: ['*', '/', ',', '-'],
};

/**
 * Declaration for the accepted range and special values
 * used to define the month definition in cron
 * => range from 1 - 12 (inclusive)
 * @type {{range: *[], specialValues: *[]}}
 */
const month = {
  name: 'month',
  allowedValues: [
    ...Array.from(new Array(12).keys(), (x) => {
      // We only want a range from 1 - 12
      const v = x + 1;
      return v.toString();
    }),
  ],
  specialValues: ['*', '/', ',', '-'],
};

/**
 * Declaration for the accepted range and special values
 * used to define the day of week definition in cron
 * => range from 1 - 7 (inclusive)
 * @type {{range: *[], specialValues: *[]}}
 */
const dayOfWeek = {
  name: 'day of week',
  allowedValues: [
    ...Array.from(new Array(7).keys(), (x) => {
      // We only want a range from 1 - 7
      const v = x + 1;
      return v.toString();
    }),
  ],
  specialValues: ['*', '/', ',', '-'],
};

const fullFormat = {
  0: minute,
  1: hour,
  2: dayOfMonth,
  3: month,
  4: dayOfWeek,
};

module.exports = {
  minute,
  hour,
  dayOfMonth,
  month,
  dayOfWeek,
  fullFormat,
};
