const initialMenu = require('./initialMenu');
const setup = require('./setup');
const timeRecordingScheduler = require('../timeRecording/timeRecordingScheduler');
const timeRecordingSteps = require('../timeRecording/timeRecordingSteps');
const { consoleLog, errorHandler } = require('../../helpers');
const dbconfig = require('../../db');

const invoke = ({ option, value }, config) => {
  let newConfig = null;
  switch (option) {
    case 0:
      timeRecordingScheduler(config);
      break;
    case 1:
      if (value) timeRecordingSteps('Agora', config);
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

const init = async() => {
  await consoleLog.splashText();
  let config = await dbconfig.exists();
  try {
    if (!config) config = await setup();
    let selectedItem = null;
    selectedItem = await initialMenu();
    await invoke(selectedItem, config);
    if (selectedItem > 0) await init();
  } catch (error) {
    errorHandler(error);
    process.exit(0);
  }
};


module.exports = { init };
