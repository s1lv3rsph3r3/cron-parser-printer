const generateNumericalSet = (min, max, interval) => {
  let low = min;
  const values = new Set();
  if (interval === 0) {
    return values;
  }
  while (low <= max) {
    values.add(low);
    low += interval;
  }
  return values;
};

module.exports = {
  generateNumericalSet,
};
