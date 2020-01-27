const { SmsProvider } = require('../providers/sms');
const db = require('../db');

const sendSMS = async({ smsToken, cellphone }, msg) => {
  if (!!smsToken && !!cellphone) {
    const sms = new SmsProvider(smsToken);
    await sms.send(`Robotimes error! ${msg}`, cellphone);
  }
};

module.exports = async(error, period) => {
  const dbconfig = await db.exists();
  const msg = `\n\r'Something wrong happend "${period}"=> details: ${error}\n\r\n\r`;
  console.error(msg);

  if (dbconfig) {
    sendSMS(dbconfig, msg);
  }
};
