const env = process.env;
const ENV = env.NODE_ENV || 'development';

module.exports = {
  port: env.PORT || 3000,
  env: ENV,
  dev: ENV === 'development',
  qa: ENV === 'qa',
  prod: ENV === 'prod',
  test: ENV === 'test',
  startTime: new Date(),
  logs: {
    level: env.LOG_LEVEL || 'DEBUG',
    layout: env.LOG_LAYOUT || 'basic'
  },
};
