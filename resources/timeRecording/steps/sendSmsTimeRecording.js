const { SmsProvider } = require('../../../providers/sms');

module.exports = async(smsToken, cellphone, period) => {
  try {
    if (smsToken) {
      const smsProvider = new SmsProvider(smsToken);
      if (period) {
        await smsProvider.send(`[robotimes] -> Ponto marcado ${period}`, cellphone);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
