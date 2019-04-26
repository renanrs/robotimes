const Totalvoice = require('totalvoice-node');

module.exports.send = async message => {
  try {
    const token = process.env.SMS_TOKEN;
    const phoneNumber = process.env.PHONE_NUMBER;
    if (!!token && !!phoneNumber) {
      const client = new Totalvoice(token);
      return await client.sms.enviar(phoneNumber, message);
    }
    return true;
  } catch (error) {
    console.error('SMS send error: ', error);
    return false;
  }
};
