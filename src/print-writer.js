const Table = require('cli-table3');
const colors = require('colors');
const definitions = require('./definitions');

const printTable = (listOfSets, cronCommand) => {
  const table = new Table({ colWidths: [21, 50], wordWrap: true });
  // for each definition we push [name, listOfOutput[position].toString()
  let row = [];
  Object.keys(definitions.fullFormat).forEach((position) => {
    row = [];
    const tempArr = [...listOfSets[position]];
    row.push(
      {
        content: colors.blue(definitions.fullFormat[position].name),
        hAlign: 'left',
      },
      { content: colors.green(tempArr.join(' ')), hAlign: 'left' },
    );
    table.push(row);
  });
  row = [];
  row.push(
    { content: colors.blue('command'), hAlign: 'left' },
    { content: colors.green(cronCommand), hAlign: 'left' },
  );
  table.push(row);
  // eslint-disable-next-line no-console
  console.log(table.toString()); // Print the table to console
};

module.exports = { printTable };
