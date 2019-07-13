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
  const msg = `Something wrong happend "${period}"=> details: ${error}`;
  console.error(msg);

  if (dbconfig) {
    sendSMS(dbconfig, msg);
  }
};
