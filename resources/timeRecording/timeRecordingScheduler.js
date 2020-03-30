const CronJob = require('cron').CronJob;
const timeRecording = require('./timeRecordingSteps');
const { consoleLog } = require('../../helpers');

const getCronTimeList = config => {
  const timesx = [
    [`00 ${config.hourInitial.split(':')[1]} ${config.hourInitial.split(':')[0]} * * 1-5`, 'entrada'],
    [`00 ${config.hourInterval.split(':')[1]} ${config.hourInterval.split(':')[0]} * * 1-5`, 'início intervalo'],
    [`00 ${config.hourIntervalEnd.split(':')[1]} ${config.hourIntervalEnd.split(':')[0]} * * 1-5`, 'fim intervalo'],
    [`00 ${config.hourGetOff.split(':')[1]} ${config.hourGetOff.split(':')[0]} * * 1-5`, 'saida']
  ];
  return timesx;
};

module.exports = config => {
  consoleLog.skipLine();
  consoleLog.write('Scheduling time record:', true, true);
  const times = getCronTimeList(config);
  times.forEach(([value, key]) => {
    consoleLog.write(`${key}: ${value}\n`, true);
    return new CronJob(value, () => timeRecording(key, config), null, true, 'America/Sao_Paulo');
  });
};
