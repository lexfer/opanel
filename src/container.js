const { createContainer, asClass, asFunction, asValue } = require('awilix');

const config = require('../config');
const Application = require('./app/Application');
const Server = require('./interfaces/http/Server');
const WSServer = require('./interfaces/ws/WSServer');
const logger = require('./infra/logging/logger');
const router = require('./interfaces/http/router');

const container = createContainer();

// System
container
   .register({
      app: asClass(Application).singleton(),
      server: asClass(Server).singleton(),
      wsserver: asClass(WSServer).singleton(),
   })
   .register({
      router: asFunction(router).singleton(),
      logger: asFunction(logger).singleton()
   })
   .register({
      config: asValue(config)
   });

module.exports = container;
