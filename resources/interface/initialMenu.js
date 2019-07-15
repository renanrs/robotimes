const inquirer = require('inquirer');
const dbconfig = require('../../db');
const { consoleLog } = require('../../helpers');
const timeRecordingScheduler = require('../timeRecording/timeRecordingScheduler');
const timeRecordingSteps = require('../timeRecording/timeRecordingSteps');

const menuInitialPrompt = async() => {
  const menuChoices = [
    { name: 'Agendar marcação de ponto', value: 1 },
    { name: 'Marcação de ponto agora', value: 0 },
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
  return { username: answer.changeEmail };
};

const changePasswordPrompt = async() => {
  const changePwdQuestion = {
    type: 'password',
    name: 'changePassword',
    message: 'Digite o nova senha:'
  };

  const answer = await inquirer.prompt(changePwdQuestion);
  return { password: answer.changePassword };
};

const updateConfig = async field => {
  let item = await dbconfig.exists();
  if (item) {
    item = Object.assign(item, field);
    await dbconfig.save(item);
  }
  return item;
};

const emailUpdate = async() => {
  const answer = await changeEmailPrompt();
  const newConfig = await updateConfig(answer);
  return newConfig;
};

const passwordUpdate = async() => {
  const answer = await changePasswordPrompt();
  const newConfig = await updateConfig(answer);
  return newConfig;
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

const timeRecordingNow = async config => {
  const confirm = await confirmTimeRecordingNowPrompt();
  if (confirm) {
    await timeRecordingSteps('Agora', config);
  }
};

const schedule = async config => {
  timeRecordingScheduler(config);
};

const callMenu = async config => {
  const selectedOption = await menuInitialPrompt();
  let newConfig;
  switch (selectedOption) {
    case 0:
      await timeRecordingNow(config);
      newConfig = config;
      break;
    case 1:
      await schedule(config);
      break;
    case 2:
      newConfig = await emailUpdate();
      break;
    case 3:
      newConfig = await passwordUpdate();
      break;

    default:
      process.exit(0);
      break;
  }

  if (newConfig) {
    await callMenu(newConfig);
  }
};
module.exports = async config => {
  await callMenu(config);
};
