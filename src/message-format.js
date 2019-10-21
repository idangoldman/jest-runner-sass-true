const chalk = require('chalk');

module.exports = function messageFormat(error = {}, trace = false) {
  const { file, line, column, message, formatted } = error;
  let formattedMessage = '';

  if (file) {
    formattedMessage += `${chalk.white.underline.bold(file)}\n`;
  }

  if (line && column) {
    formattedMessage += `  ${chalk.dim(line + ':' + column)} `;
  }

  if (message) {
    formattedMessage += `${chalk.red('ERROR')} ${message}\n`;
  }

  if (trace && formatted) {
    formattedMessage += `\n${chalk.red('TRACE')} ${chalk.dim(formatted)}\n`;
  }

  // `
  // ${file}
  //   ${lineColumn} ${message}
  // ${trace}
  // `;
  return formattedMessage;
}
