import * as config from 'config';
import * as log4js from 'log4js';

const level = config.get<string>('logs.level').toUpperCase();
const layout = config.get<string>('logs.layout').toLowerCase();

const layouts = {
  basic: {
    type: 'console',
    layout: { type: 'basic' },
  },
  colored: {
    type: 'console',
    layout: { type: 'colored' },
  },
};

log4js.configure({
  appenders: [layouts[layout]],
  replaceConsole: true,
});

const logger = log4js.getLogger('main');
logger.setLevel(level);

export { logger };
