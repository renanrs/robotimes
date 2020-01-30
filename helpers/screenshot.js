const fs = require('fs');
const path = require('path');

const rootPath = path.dirname(require.main.filename || process.mainModule.filename);
const scrDir = path.resolve(rootPath, process.env.SCREENSHOT_DIR);

module.exports = async(page, fileName) => {
  if (process.env.TAKE_SCREENSHOT) {
    const currentDate = new Date()
      .toLocaleString()
      .replace(/\//g, '-')
      .replace(/,/g, '');

    const fullDir = scrDir.concat(`/${currentDate.split(' ')[0]}/`);

    if (!fs.existsSync(scrDir)) {
      fs.mkdirSync(scrDir);
    }

    if (!fs.existsSync(fullDir)) {
      fs.mkdirSync(fullDir);
    }

    await page.screenshot({ path: `${fullDir}${fileName}_${currentDate}.png` });
  }
};
