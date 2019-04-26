const sms = require('../providers/sms');

module.exports = async(error, period) => {
  const msg = `Something wrong happend "${period}"=> details: ${error}`;
  console.error(msg);
  await sms.send(`Robotimes error! ${msg}`);
};
