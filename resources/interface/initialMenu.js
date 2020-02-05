const inquirer = require('inquirer');
const { consoleLog } = require('../../helpers');


const menuInitialPrompt = async() => {
  const menuChoices = [
    { name: 'Agendar marcação de ponto', value: 0 },
    { name: 'Marcação de ponto agora', value: 1 },
    { name: 'Alterar e-mail', value: 2 },
    { name: 'Alterar senha', value: 3 },
    { name: 'Sair' }
  ];

  const initialMenuQuestion = {
    type: 'list',
    name: 'initialMenu',
    message: 'Selecione o item desejado:',
    choices: menuChoices
  };

  consoleLog.skipLine();
  const answer = await inquirer.prompt(initialMenuQuestion);
  return answer.initialMenu;
};

const changeEmailPrompt = async() => {
  const changeEmailQuestion = {
    type: 'input',
    name: 'changeEmail',
    message: 'Digite o novo e-mail:'
  };

  const answer = await inquirer.prompt(changeEmailQuestion);
  return answer.changeEmail;
};

const changePasswordPrompt = async() => {
  const changePwdQuestion = {
    type: 'password',
    name: 'changePassword',
    message: 'Digite o nova senha:'
  };

  const answer = await inquirer.prompt(changePwdQuestion);
  return answer.changePassword;
};

const confirmTimeRecordingNowPrompt = async() => {
  const question = {
    type: 'confirm',
    name: 'confirmTimeRecordingNow',
    message: 'Confirma a marcação de ponto?',
    default: false
  };
  const answer = await inquirer.prompt(question);
  return answer.confirmTimeRecordingNow;
};

module.exports = async() => {
  const option = await menuInitialPrompt();
  let value = null;
  switch (option) {
    case 1:
      value = await confirmTimeRecordingNowPrompt();
      break;
    case 2:
      value = await changeEmailPrompt();
      break;
    case 3:
      value = await changePasswordPrompt();
      break;
    default:
      break;
  }

  return { option, value };
};
