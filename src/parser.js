const expressions = require('./expressions');
const resultsGenerator = require('./results-generator');
const { containsOnlyAcceptableValues } = require('./validation');

const parseCronInterval = (part) => {
  return parseInt(part.split('/')[1], 10);
};

const parseCronRange = (part) => {
  const range = part
    .split('-')
    .map((x) => parseInt(x, 10))
    .sort((a, b) => {
      return a - b;
    });
  return {
    max: range[range.length - 1],
    min: range[0],
  };
};
const parsePartCronEntity = (part, definition) => {
  // Standard default maximum will be defined in our cron definition
  const defaultMax = parseInt(
    definition.allowedValues[definition.allowedValues.length - 1],
    10,
  );
  // Standard default minimum will be defined in our cron definition
  const defaultMin = parseInt(definition.allowedValues[0], 10);
  // Remove any additional whitespace
  const p = part.trim();
  if (p.match(expressions.timeDigit)) {
    const min = parseInt(p, 10);
    // Because we are only generating a single entry, we use min and max
    // as the same value and then an interval of 1.
    return resultsGenerator.generateNumericalSet(min, min, 1);
  }
  if (p.match(expressions.timeRange)) {
    // case when x-n then take range as minutes (x through n)
    // we assume that x < n but it could be the other way around as it is still a valid range
    const { min, max } = parseCronRange(p);
    return resultsGenerator.generateNumericalSet(min, max, 1);
  }
  if (p.match(expressions.timeRangeWithInterval)) {
    // if it matches x-n/k then take range as minutes (x through n every k interval) - use regex
    const { min, max } = parseCronRange(p);
    return resultsGenerator.generateNumericalSet(
      min,
      max,
      parseCronInterval(p),
    );
  }
  if (p.match(expressions.wildCardInterval)) {
    // if it matches */n then take (every n minutes) - use regex
    return resultsGenerator.generateNumericalSet(
      defaultMin,
      defaultMax,
      parseCronInterval(p),
    );
  }
  if (p.match(expressions.wildCard)) {
    return resultsGenerator.generateNumericalSet(defaultMin, defaultMax, 1);
  }
  // If there are any parts that don't match up to what we would expect
  // then we go ahead and throw an error to prevent bad formatted cron
  // strings from being processed
  throw new Error(`Definition does not match to expected input: ${part}`);
};
/**
 * Parse a single part of the cron string.
 * Example: If full cron input = 10 * 2-3 * * command
 * this function would take as input a single piece of the full string,
 * "2-3" or "10" or "*"
 * @param entity
 * @param definition
 */
const parseSingleCronEntity = (entity, definition) => {
  if (entity === undefined || entity === null) {
    throw new Error(`Not a valid ${definition.name} definition: ${entity}`);
  }
  const m = entity.trim();
  // if m is empty then return error
  if (m === '') {
    throw new Error(`Not a valid ${definition.name} definition: ${entity}`);
  }

  if (!containsOnlyAcceptableValues(m, definition)) {
    throw new Error(`Not a valid ${definition.name} definition: ${entity}`);
  }

  // Each cron entity can consist of multiple parts, delimited by a comma (,)
  const parts = m.split(',');

  // Keep track of the full numerical set as we iterate
  // through all the parts to calculate the appropriate digits
  let numericalSet = new Set();

  parts.forEach((part) => {
    const n = parsePartCronEntity(part, definition);
    numericalSet = new Set([...numericalSet, ...n]);
  });
  return numericalSet;
};

module.exports = {
  parseSingleCronEntity,
  parsePartCronEntity,
  parseCronInterval,
  parseCronRange,
};
