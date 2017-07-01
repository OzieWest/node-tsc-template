import * as bodyParser from 'body-parser';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mw from './middlewares';
import { routes } from './routes';
import * as utils from './utils';

const server = (): express.Application => {
  const app = express();
  app.disable('x-powered-by');
  app.set('config', config);
  app.set('utils', utils);

  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/', routes());

  app.use(mw.notFound());
  app.use(mw.onError());

  return app;
};

export { server };
