const commander = require('commander');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'variables.env') });
const pkgJson = require('./package.json');
const timesInterface = require('./resources/interface/index');

const dbconfig = require('./db');
const scheduler = require('./resources/timeRecording/timeRecordingScheduler');
const timeRecordingSteps = require('./resources/timeRecording/timeRecordingSteps');

const program = new commander.Command();
program.version(pkgJson.version);

program
  .option('-s|--schedule', 'Scheduling time recorder')
  .option('-r|--record-now', 'Recording Time')
  .parse(process.argv);

dbconfig.exists().then(config => {
  if (!config) process.exitCode(1);

  if (program.schedule) {
    scheduler(config);
  } else if (program.recordNow) {
    timeRecordingSteps('Agora', config);
  } else {
    timesInterface.init();
  }
});
