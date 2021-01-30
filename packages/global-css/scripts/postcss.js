/**
 * @author iWuzhi
 * @date 2021-01-30 13:03:18
 */

const path = require('path');
const fs = require('fs-extra');
const postcss = require('postcss');
const chalk = require('chalk');

const postcssConfig = require(path.join(process.cwd(), 'postcss.config'));

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env'),
});

const entry = path.join(process.cwd(), process.env.entry);
const output = path.join(process.cwd(), process.env.output);
// FIXME: dir + filename
const outputMap = path.join(process.cwd(), process.env.output.split('.').join('.map.'));

console.log(chalk.greenBright('Postcss build start: '));
fs.readFile(entry, (err, css) => {
  if (err) {
    console.error(chalk.red(err));
    process.exit(1);
  }
  postcss(postcssConfig.plugins.map((plugin) => plugin())) // TODO: Options support
    .process(css, {
      from: process.env.entry,
      to: process.env.output,
    })
    .then((result) => {
      console.log(chalk.greenBright('Postcss build end.'));
      console.log(chalk.greenBright('Write file to: '), chalk.yellow(entry));
      fs.outputFile(output, result.css, () => true);
      if (result.map) {
        console.log(chalk.greenBright('Write map file to: '), chalk.yellow(outputMap));
        fs.outputFile(outoutMap, result.map.toString(), () => true);
      }
    })
    .catch((e) => {
      console.error(chalk.red(e));
    })
    .finally(() => {
      console.log(
        chalk.greenBright('Remove temp file : '),
        chalk.yellow(path.join(process.cwd(), 'index.less.css'))
      );
      fs.remove(path.join(process.cwd(), 'index.less.css'));
    });
});
