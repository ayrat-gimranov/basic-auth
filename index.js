'use strict';

require('dotenv').config();

const server = require('./src/server');

const { db } = require('./src/models/index') 

db.sync()
  .then(() => server.start(process.env.PORT))
  .catch(e => console.error('Could not start server', e.message))