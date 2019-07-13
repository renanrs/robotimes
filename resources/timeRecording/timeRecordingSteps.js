const luncher = require('./steps/luncher');
const login = require('./steps/login');
const timeRecording = require('./steps/timeRecording');
const sendSms = require('./steps/sendSmsTimeRecording');
const { errorHandler, consoleLog } = require('../../helpers');

module.exports = async(period, { username, password, smsToken, cellphone }) => {
  try {
    consoleLog.skipLine();
    consoleLog.write(period, true, true);

    let puppet = await luncher.init();
    puppet = Object.assign(puppet, { credentials: { username, password } });
    await login(puppet);
    await timeRecording(puppet);
    await sendSms(smsToken, cellphone, period);
    await luncher.destroy();
  } catch (error) {
    errorHandler(error, period);
  }
};
