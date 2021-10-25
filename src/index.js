#!/usr/bin/env node
const chalk = require('chalk');
const commander = require('commander');

const definitions = require('./definitions');
const { parseSingleCronEntity } = require('./parser');
const { isCronStringValid } = require('./validation');
const { printTable } = require('./print-writer');

const currentNodeVersion = process.versions.node;
const packageJson = require('../package.json');

const scriptName = 'Cron Parser Printer';
const semver = currentNodeVersion.split('.');
const major = semver[0];

(async () => {
  // Check that we are running a sufficient version of node
  if (major < 14) {
    // eslint-disable-next-line no-console
    console.error(
      `You are running Node ${currentNodeVersion}.\n` +
        `${scriptName} requires Node 14 or higher. \n` +
        'Please update your version of Node.',
    );
    process.exit(1);
  }

  const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments('<cron-string>')
    .usage(`${chalk.green('<cron-string>')}`)
    .on('--help', () => {
      // eslint-disable-next-line no-console
      console.log();
      // eslint-disable-next-line no-console
      console.log(`Expected command format ${chalk.green('<cron-string>')}.`);
      // eslint-disable-next-line no-console
      console.log();
    })
    .parse(process.argv);

  if (!isCronStringValid(program.args[0])) {
    // eslint-disable-next-line no-console
    console.error(
      `${chalk.red(
        'Incorrectly formatted cron-string.',
      )} \nExpected cron string to be in the format: ${chalk.green(
        "'minute hour day-of-month month day-of-week command'",
      )}`,
    );
    process.exit(1);
  }

  try {
    const cronParts = program.args[0].split(' ');
    const tableRows = [];
    Object.keys(definitions.fullFormat).forEach((position) => {
      tableRows.push(
        parseSingleCronEntity(
          cronParts[position],
          definitions.fullFormat[position],
        ),
      );
    });
    printTable(tableRows, cronParts[cronParts.length - 1]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    process.exit(1);
  }
  // DONE
})();
