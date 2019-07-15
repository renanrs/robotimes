const puppeteer = require('puppeteer');

let browser;
let page;

const init = async() => {
  browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] });
  page = await browser.newPage();
  return { browser, page };
};

const destroy = async() => {
  browser.close();
  page = undefined;
  browser = undefined;
};

module.exports = { init, destroy };
