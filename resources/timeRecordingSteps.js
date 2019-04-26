const login = require('./login');
const timeRecording = require('./timeRecording');
const sendSms = require('./sendSmsTimeRecording');
const { errorHandler } = require('../helpers');

module.exports = async period => {
  try {
    const puppet = await login();
    await timeRecording(puppet);
    await sendSms(period);
  } catch (error) {
    errorHandler(error, period);
  }
};
