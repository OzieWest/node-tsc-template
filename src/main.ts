import * as config from 'config';
import { server } from './express';
import { logger, stringify } from './utils';

const app = server();

const port = config.get<number>('port');
app.listen(port, (): void => {
  logger.info(`start_configuration: ${stringify(config)}`);
});

const onExit = (err: Error): void => {
  logger.fatal(stringify(err));
  process.exit(1);
};

process.on('uncaughtException', onExit);
process.on('unhandledRejection', onExit);
process.on('exit', (code: number): void => {
  logger.fatal(`About to exit with code: ${code}`);
});
