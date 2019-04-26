const puppeteer = require('puppeteer');
const { selectors, screenshot, consoleLog } = require('../../helpers/');

module.exports = async credentials => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();

  consoleLog.iamGoingTo(process.env.URL_LOGIN);
  await page.goto(process.env.URL_LOGIN, { waitUntil: 'networkidle2' });
  await page.waitFor(selectors.login.emailInput);
  await page.focus(selectors.login.emailInput);
  await page.keyboard.type(credentials.username);

  consoleLog.typing('username');
  await page.focus(selectors.login.passwordInput);
  await page.keyboard.type(credentials.password);

  consoleLog.typing('password');
  await screenshot(page, 'login');
  await page.click(selectors.login.loginButton);

  consoleLog.write('Logging...');
  await page.waitForSelector(selectors.loggedArea.menu, { waitUntil: 'networkidle2' });
  await screenshot(page, 'menu');
  consoleLog.write('Login successfull...');
  const puppet = { page, browser };
  return puppet;
};
