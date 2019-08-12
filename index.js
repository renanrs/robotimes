const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'variables.env') });
const timesInterface = require('./resources/interface/index');

(async() => {
  await timesInterface.init();
})();
