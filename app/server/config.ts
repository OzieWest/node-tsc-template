const argv = require('optimist').argv;

export default {
  port: process.env.NODE_PORT || argv['port'] || 3000,
  env: process.env.NODE_ENV || argv['env'] || 'development'
};