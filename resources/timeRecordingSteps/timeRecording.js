const moment = require('moment');
const { selectors, screenshot, consoleLog } = require('../../helpers/');

const timeRecording = async({ page }) => {
  if (page.url() !== process.env.URL_TIMERECORDING) {
    await page.goto(process.env.URL_TIMERECORDING, { waitUntil: 'networkidle0' });
  }

  await page.waitForSelector(selectors.timeRecording.recordButton);
  await screenshot(page, 'timerecording');
  await page.click(selectors.timeRecording.recordButton);
  consoleLog.write(`Time recorded => ${moment(Date.now()).format('hh:mm')}`, true, true);
  await screenshot(page, 'timerecorded');
};

const timeRecordingSheetValidation = async({ page, credentials }) => {
  await page.waitFor(1500);
  if (await page.$(selectors.timeRecording.modalRecordSheetValidation) !== null) {
    consoleLog.write('Record Sheet validation...');
    await page.focus(selectors.timeRecording.passwordInput);
    await page.keyboard.type(credentials.password);
    await page.click(selectors.timeRecording.confirmValidationButton);
    await screenshot(page, 'recordsheet_validation');
  }
};

const timeRecordingPageRedirect = async puppet => {
  const page = puppet.page;
  await page.goto(process.env.URL_TIMERECORDING, { waitUntil: 'networkidle0' });
};

module.exports = async puppet => {
  await timeRecordingPageRedirect(puppet);
  await timeRecordingSheetValidation(puppet);
  await timeRecording(puppet);
  puppet.browser.close();
};
