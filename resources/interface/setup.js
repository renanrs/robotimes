const inquirer = require('inquirer');
const dbconfig = require('../../db');
const { consoleLog } = require('../../helpers');

const timeValidation = input => /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(input);

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Informe seu e-mail do mytimes:'
  },
  {
    type: 'password',
    mask: true,
    name: 'password',
    message: 'Informe sua senha do mytimes:'
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
  await dbconfig.save(answers);
};
