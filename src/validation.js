const isCronStringValid = (cronString) => {
  if (cronString === undefined || cronString === null) {
    return false;
  }
  const inputArr = cronString.split(' ');
  return inputArr.length === 6;
};

/**
 * From a definition of a part of the cron, determine
 * if the given part of the cron string contains only
 * accepted values to be parsed.
 * @param cronPart
 * @param definition
 * @return {boolean}
 */
const containsOnlyAcceptableValues = (cronPart, definition) => {
  // if m contains anything other than expected set of characters => return error.
  const acceptableValues = [
    ...definition.allowedValues,
    ...definition.specialValues,
  ];
  const letters = [...cronPart];
  const difference = letters.filter((x) => !acceptableValues.includes(x));
  return difference.length === 0;
};

module.exports = {
  isCronStringValid,
  containsOnlyAcceptableValues,
};
