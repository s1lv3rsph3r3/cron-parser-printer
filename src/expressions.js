/**
 * Regex to match with 1 or 2 digits only
 * Valid Examples:
 *  - 1
 *  - 01
 *  - 10 (etc)
 * @type {RegExp}
 */
const timeDigit = /^\d{1,2}$/g;

/**
 * Regex to match with a 1 or 1 digits
 * plus a numeric interval
 * Valid Examples:
 *  - 0/1
 *  - 3/10
 * @type {RegExp}
 */
const timeDigitWithInterval = /^\d{1,2}\/[1-9]([0-9])?$/g;

/**
 * Regex to match with a numeric range with
 * 1 or 2 digits on either side of the range
 * Valid Examples:
 *  - 1-34
 *  - 34-1
 *  - 4-5
 * @type {RegExp}
 */
const timeRange = /^\d{1,2}-\d{1,2}$/g;

/**
 * Regex to match with a numeric range with
 * 1 or 2 digits on either side of the range plus
 * a numeric interval. NB: Interval cannot be 0 (zero)
 * Valid Examples:
 *  - 1-34/3
 *  - 34-1/2
 *  - 12-14/1
 * @type {RegExp}
 */
const timeRangeWithInterval = /^\d{1,2}-\d{1,2}\/[1-9]([0-9])?$/g;

// /**
//  * Regex to match with a numeric wildcard
//  * interval
//  * Valid Examples:
//  *  - */5
//  * @type {RegExp}
//  */
const wildCardInterval = /^\*\/\d{1,2}$/g;

/**
 * Regex to match wildcard
 * Valid Examples:
 *  - *
 * @type {RegExp}
 */
const wildCard = /^\*$/g;

module.exports = {
  timeDigit,
  timeDigitWithInterval,
  timeRange,
  timeRangeWithInterval,
  wildCardInterval,
  wildCard,
};
