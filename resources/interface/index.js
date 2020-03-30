const initialMenu = require('./initialMenu');
const setup = require('./setup');
const timeRecordingScheduler = require('../timeRecording/timeRecordingScheduler');
const timeRecordingSteps = require('../timeRecording/timeRecordingSteps');
const { consoleLog, errorHandler } = require('../../helpers');
const dbconfig = require('../../db');

const invokeAction = async({ option, value }, config) => {
  let newConfig = null;
  switch (option) {
    case 0:
      timeRecordingScheduler(config);
      break;
    case 1:
      if (value) await timeRecordingSteps('Agora ⌚', config);
      break;
    case 2:
      newConfig = dbconfig.save(Object.assign(config, { username: value }));
      break;
    case 3:
      newConfig = dbconfig.save(Object.assign(config, { password: value }));
      break;
    default:
      process.exit(0);
      break;
  }
  return newConfig || config;
};

const showMenu = async config => {
  const selectedItem = await initialMenu();
  try {
    await invokeAction(selectedItem, config);
  } catch (error) {
    await errorHandler(error);
  }
  if (selectedItem && selectedItem.option > 0) await showMenu(config);
};

const init = async() => {
  await consoleLog.splashText();
  let config = await dbconfig.exists();

  if (!config) {
    config = await setup();
    await dbconfig.save(config);
  }

  await showMenu(config);
};

module.exports = { init };
