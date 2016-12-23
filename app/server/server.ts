const loopback = require('loopback');
const boot = require('loopback-boot');
const app = module.exports = loopback();
const log4js = require('log4js');
const logger = log4js.getLogger('app');

app.start = () => {
  return app.listen(() => {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    logger.debug('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      logger.debug('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

boot(app, __dirname, err => {
  if (err) throw err;

  require.main === module && app.start();
});

process.on('uncaughtException', err => {
  logger.fatal(err.stack.toString());
  process.exit(1);
});
