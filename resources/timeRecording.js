require('dotenv').config();
const { selectors, screenshot, consoleLog } = require('../helpers/');

module.exports = async puppet => {
  const page = puppet.page;
  await page.goto(process.env.URL_TIMERECORDING, { waitUntil: 'networkidle0' });
  await page.waitForSelector(selectors.timeRecording.recordButton);
  await screenshot(page, 'timerecording');
  await page.click(selectors.timeRecording.recordButton);
  await consoleLog.write(`Time recorded => ${Date.now()}`, true, true);
  await screenshot(page, 'timerecorded');

  puppet.browser.close();
};
