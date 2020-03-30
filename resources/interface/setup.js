const inquirer = require('inquirer');
const { consoleLog } = require('../../helpers');

// eslint-disable-next-line no-useless-escape
const emailValidation = input => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
const timeValidation = input => /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(input);
const cellphoneValidation = input => /^[1-9]{2}9[1-9][0-9]{3}[0-9]{4}?$/.test(input);
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Informe seu e-mail do mytimes:',
    validate: input => emailValidation(input)
  },
  {
    type: 'password',
    mask: true,
    name: 'password',
    message: 'Informe sua senha do mytimes:'
  },
  {
    type: 'confirm',
    name: 'confirmSmsToken',
    message: `Deseja adicionar Token do TotalVoice para receber sms referente a marcação de ponto?
    Para gerar o token, é necessário se registrar no site www.totalvoice.com.br.`,
    default: false
  },
  {
    type: 'input',
    name: 'smsToken',
    message: 'Informe o token do TotalVoice:',
    when: answers => answers.confirmSmsToken
  },
  {
    type: 'input',
    name: 'cellphone',
    message: 'Informe o número do seu celular. Exemplo: 11988653287',
    when: answers => answers.confirmSmsToken,
    validate: input => cellphoneValidation(input)
  },
  {
    type: 'input',
    name: 'hourInitial',
    message: 'Informe seu horário de entrada (hh:mm):',
    validate: input => timeValidation(input)
  },
  {
    type: 'input',
    name: 'hourInterval',
    message: 'Informe o horário de início do intervalo (hh:mm):',
    validate: input => timeValidation(input)
  },
  {
    type: 'input',
    name: 'hourIntervalEnd',
    message: 'Informe o horário fim do intervalo (hh:mm):',
    validate: input => timeValidation(input)
  },
  {
    type: 'input',
    name: 'hourGetOff',
    message: 'Informe seu horário de saída (hh:mm):',
    validate: input => timeValidation(input)
  }
];

module.exports = async() => {
  consoleLog.skipLine();
  const answers = await inquirer.prompt(questions);
  return answers;
};
