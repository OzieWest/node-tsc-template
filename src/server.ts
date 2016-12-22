const path = require('path');
const util = require('util');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const logger = log4js.getLogger('app');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

import config from './config';
import route from './routes/index';

app.use('/api', route);

app.listen(config.port, () => {
    logger.info(`Init configuration: ${util.inspect(config)}`);
});

process.on('uncaughtException', (err)=> {
    logger.fatal(err.stack.toString());
    process.exit(1);
});
