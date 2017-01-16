import * as path from 'path';
import * as util from 'util';
import * as express from 'express';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as log4js from 'log4js/lib/log4js';

const logger = log4js.getLogger('app');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

import config from './config';
import route from './routes/index';

app.use('/', route);

app.listen(config.port, () => {
  logger.info(`Init configuration: ${util.inspect(config)}`);
});

process.on('uncaughtException', (err)=> {
  logger.fatal(err.stack.toString());
  process.exit(1);
});