require('dotenv').config({ path: 'variables.env' });
const timesInterface = require('./resources/interface/index');

(async() => {
  await timesInterface.init();
})();
