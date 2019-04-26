const login = require('./login');
const timeRecording = require('./timeRecording');
const sendSms = require('./sendSmsTimeRecording');
const { errorHandler, consoleLog } = require('../../helpers');

module.exports = async(period, { username, password }) => {
  try {
    consoleLog.skipLine();
    consoleLog.write(period, true, true);
    const puppet = await login({ username, password });
    await timeRecording(puppet);
    await sendSms(period);
  } catch (error) {
    errorHandler(error, period);
  }
};
