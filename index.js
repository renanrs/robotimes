require('dotenv').config();
const timesInterface = require('./resources/interface/index');

(async() => {
  await timesInterface.init();
})();
