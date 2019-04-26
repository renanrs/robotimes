const initialMenu = require('./initialMenu');
const setup = require('./setup');
const { consoleLog, errorHandler } = require('../../helpers');
const dbconfig = require('../../db');


const init = async() => {
  await consoleLog.splashText();
  const config = await dbconfig.exists();
  try {
    if (!config) {
      await setup();
    }

    await initialMenu(config);
  } catch (error) {
    errorHandler(error);
    process.exit(0);
  }
};

module.exports = { init };
