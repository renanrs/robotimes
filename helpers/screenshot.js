const fs = require('fs');

const scrDir = process.env.SCREENSHOT_DIR;

module.exports = async(page, fileName) => {
  if (process.env.TAKE_SCREENSHOT) {
    const currentDate = new Date().toLocaleString();
    const fullDir = scrDir.concat(`${currentDate.replace(/\//g, '-')
      .replace(/,/g, '')
      .split(' ')[0]}/`);

    if (!fs.existsSync(scrDir)) {
      fs.mkdirSync(scrDir);
    }

    if (!fs.existsSync(fullDir)) {
      fs.mkdirSync(fullDir);
    }

    await page.screenshot({ path: `${fullDir}${fileName}_${currentDate.replace(/\//g, '-').replace(/,/g, '')}.png` });
  }
};
