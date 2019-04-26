const os = require('os');

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const splashText = async() => {
  console.log('                  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
  console.log('                  ░░░░░░░░▀▀▀▀▄▄▄▄▄▄▄▄▀▀▀▀▀▀▀░░░░░░░░░░░░░░');
  console.log('                  ░░░░░░░░ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▄▀░░░░░░░░░░░');
  console.log('                  ░░░░░░░ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ░░░░░░░░░░');
  console.log('                  ░░░░░░ ▒▒▒▒▒▒▀  ▄▀▀▒▒▒▒▒▀▀▀▒▒▒ ░░░░░░░░░░');
  console.log('                  ░░░░░▄▒▀▀▀▒▒ ▄▄▄▄▀▀ ▒▒▒  ▀▀ ▒▒▒ ░░░░░░░░░');
  console.log('                  ░░░░ ▒ ▒▀▒▄▀▀▀▄▒▒▒▒▒▒▒▒ ▒▒▒▒▒▒▒▒ ░░░░░░░░');
  console.log('                  ░░░░ ▒ ▒ ▄▀▀▒▒▒▒▒ ▄▒▒▒▒▄▀▒▒▀▄▄▄▀▒ ░░░░░░░');
  console.log('                  ░░░░░ ▄▀▒ ▀▒ ▄▀▀▒▄▒▄▄▒▀▀▄▒▒▒▒ ▒▒ ░░░░░░░░');
  console.log('                  ░░░░░░ ▒▒▄▀▄ ▀▀▒ ▄▄▄▀▀▀▀▄▄ ▄  ▒ ░░░░░░░░░');
  console.log('                  ░░░░░░░ ▒▒  ▒▒▄ ▀▀▀ ▀▀ ▀ ▒▒ ▒▒▒ ░░░░░░░░░');
  console.log('                  ░░░░░░░░ ▒▒▒▄▄▀▒ ▒▒ ▒▒ ▒▒  ▒▒▒ ░░░░░░░░░░');
  console.log('                  ░░░░░░░░░▄▀▒▒▒▄▄▀▀▀ ▀ ▀ ▀ ▀▄▒▒ ░░░░░░░░░░');
  console.log('                  ░░░░░░░░░░░▄▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ░░░░░░░░░░░');
  console.log('                  ░░░░░░░░░░░░░░▄▄▀▀▒▒▒▒▒▒▒▒▒▒▒▒ ░░░░░░░░░░');
  console.log('                  ░░░░░░░░░░░░░░░░░░▄▀▀▀▀▀▒▒▒▒▒ ░░░░░░░░░░░');
  console.log('                  ░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄▄▄░░░░░░░░░░░░');
  console.log('                  ░░░░░░░╔═══╗░░╔╗░░░░░╔╗░░░░░░░░░░░░░░░░░░');
  console.log('                  ░░░░░░░║╔═╗║░░║║░░░░╔╝╚╗░░░░░░░░░░░░░░░░░');
  console.log('                  ░░░░░░░║╚═╝╠══╣╚═╦══╬╗╔╬╦╗╔╦══╦══╗░░░░░░░');
  console.log('                  ░░░░░░░║╔╗╔╣╔╗║╔╗║╔╗║║║╠╣╚╝║║═╣══╣░░░░░░░');
  console.log('                  ░░░░░░░║║║╚╣╚╝║╚╝║╚╝║║╚╣║║║║║═╬══║░░░░░░░');
  console.log('                  ░░░░░░░╚╝╚═╩══╩══╩══╝╚═╩╩╩╩╩══╩══╝░░░░░░░');
  console.log('                  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
  await snooze(2000);
  console.log(os.EOL);
  console.log('                          Bem vindo(a) ao Robotimes!');
  console.log(os.EOL);
  await snooze(500);
};
const skipLine = () => console.log(os.EOL);

const iamGoingTo = (url, skipNextLine = false) => {
  if (url) {
    console.log(`↳ I am going to ${url}`);
    if (skipNextLine) skipLine();
  }
};

const typing = (txt, skipNextLine = false) => {
  if (txt) {
    console.log(`↳ typing ${txt}...`);
    if (skipNextLine) skipLine();
  }
};

const redirectedTo = (url, skipNextLine = false) => {
  if (url) {
    console.log(`↳ redirected to ${url}`);
    if (skipNextLine) skipLine();
  }
};

const write = (message, alwaysWrite, skipNextLine = false) => {
  if (message) {
    console.log(`↳ ${message}`);
    if (skipNextLine) skipLine();
  }
};

module.exports = {
  splashText,
  iamGoingTo,
  typing,
  redirectedTo,
  write,
  skipLine
};
