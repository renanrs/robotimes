const sms = require('../providers/sms');

module.exports = async period => {
  try {
    if (period) {
      await sms.send(`Ponto marcado ${period}`);
    }
  } catch (error) {
    console.error(error);
  }
};
