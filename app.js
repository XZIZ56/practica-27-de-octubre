const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const { router, setupSOAP } = require('./routes/soapRoutes');

const app = express();
app.use(logger);
app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));
app.use('/', router);

module.exports = { app, setupSOAP };
