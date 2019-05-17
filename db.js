/* eslint-disable no-underscore-dangle */
const Datastore = require('nedb-promise');


const db = new Datastore({ filename: process.env.DB_PATH, autoload: true });

const exists = async() => {
  const item = await db.findOne({});

  if (item) {
    return item;
  }

  return null;
};

const save = async({
  username, password, hourInitial,
  hourInterval, hourIntervalEnd, hourGetOff,
  smsToken, cellphone
}) => {
  const doc = {
    username,
    password,
    hourInitial,
    hourInterval,
    hourIntervalEnd,
    hourGetOff,
    smsToken,
    cellphone
  };
  let item = await exists();
  if (item) {
    item = Object.assign(item, doc);
    await db.update({ _id: item._id }, { ...item }, {});
  } else {
    await db.insert(doc);
  }
};

module.exports = { exists, save };
