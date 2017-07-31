const moment = require('moment');
const chalk = require('chalk');

module.exports = (type, message) => {
  // const logLevel = config.logLevel;
  const logTypes = ['log', 'info', 'warn', 'err', 'none'];
  let logMessage = '';

  // if (!config.debugMode) {
  //   return;
  // }
  // if (logTypes.indexOf(type) < logTypes.indexOf(logLevel)) {
  //   return;
  // }
  message = chalk.grey(moment().format('HH:mm:ss').toString()) + '  ' + message;
  switch (type) {
  case 'log':
    logMessage = chalk.grey('Log:  ') + message;
    break;
  case 'info':
    logMessage = chalk.blue('Info:  ') + message;
    break;
  case 'warn':
    logMessage = chalk.yellow('Warn:  ') + message;
    break;
  case 'err':
    logMessage = chalk.red('Err:  ') + message;
    break;
  }
  console.log(logMessage);
}
