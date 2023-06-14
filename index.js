'use strict';
require('dotenv').config();
const { start } = require('./src/server');
const port = process.env.PORT || 3030;
const { db } = require('./src/models/index');

db.sync().then(() => {
  start(port)
});
