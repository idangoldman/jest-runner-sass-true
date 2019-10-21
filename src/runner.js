// require('jest');
// const { describe, it } = global;
const { fail, pass }   = require('create-jest-runner');
const sassTrue         = require('sass-true');
const messageFormat    = require('./message-format');

module.exports = async ({ config, testPath }) => {
  const start = Date.now();
  const { displayName, globals } = config;

  try {
    sassTrue.runSass(
      { file: testPath }, { describe, it }
    );

    return pass({
      start,
      end: Date.now(),
      test: {
        title: displayName,
        path: testPath
      }
    });
  } catch (error) {
    return fail({
      error,
      start,
      end: Date.now(),
      test: {
        title: displayName,
        errorMessage: messageFormat(error, globals.trace),
        path: testPath
      }
    });
  }
};
