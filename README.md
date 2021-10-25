# cron-parser-printer
A simple package to print a friendly cron output.

# Requirements
You should be running NodeJs `14.7.x`. To check this, navigate to your terminal and run `node --version`.
Your user should also have permissions to run scripts.

You should also be running NPM `6.14.x` or higher.

# Usage
This package prints a friendly table like output to describe a cron input command.

Using the command line, run the following:

`npx github:s1lv3rsph3r3/cron-parser-printer "*/15 0 1,15 * 1-5 /usr/bin/find"`

The input can be described as a single string in the following format:

`<minute> <hour> <day-of-month> <month> <day-of-week> <command>`

Input that does not follow this format will throw an error describing the issue.

# Supported Cron Syntax
| Field  | Allowed Values | Allowed Special Characters
| ------------- | ------------- | ------------- |
| minutes | `0-59`  | `*` `,` `-`  |
| hours  | `0-23`  | `*` `,` `-`  |
| day of month  | `1-31`  | `*` `,` `-` |
| month  | `1-12`  | `*` `,` `-`  |
| day of week  | `1-7`  | `*` `,` `-`  |

# Additional Functionality
`(/)` Slashes can be used in conjunction with ranges. Example: `2-10/2` is equivalent to `2,4,6,8,10`.

# Examples
Below are some examples to demonstrate the flexibility of this cron parsing printer:

`"*/5 * * * * /usr/bin/find"`

`"2,3,4 * * * * /usr/bin/find"`

`"2-15/2,*/18 0 * 12-4 * /usr/bin/find"`
