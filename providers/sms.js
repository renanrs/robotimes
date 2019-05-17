const Totalvoice = require('totalvoice-node');

class SmsProvider {
  constructor(smsToken) {
    this.token = smsToken;
  }

  async send(message, phoneNumber) {
    try {
      if (!!this.token && !!phoneNumber) {
        const client = new Totalvoice(this.token);
        return await client.sms.enviar(phoneNumber, message);
      }
      return true;
    } catch (error) {
      console.error('SMS send error: ', error);
      return false;
    }
  }
}

module.exports = { SmsProvider };
