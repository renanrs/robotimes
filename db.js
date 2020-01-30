/* eslint-disable no-underscore-dangle */
const Datastore = require('nedb-promise');
const path = require('path');

const storeOpts = {
  filename: path.resolve(__dirname, process.env.DB_PATH),
  autoload: true
};

const db = new Datastore(storeOpts);

const exists = async() => {
  const item = await db.findOne({});

  if (item) {
    return item;
  }

  return null;
};

const save = async args => {
  let item = await exists();
  if (item) {
    item = Object.assign(item, args);
    await db.update({ _id: item._id }, { ...item }, {});
  } else {
    item = await db.insert(args);
  }
  return item;
};

module.exports = { exists, save };
