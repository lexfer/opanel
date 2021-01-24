const ws = require('ws');

class WSServer {
   constructor({ config, logger }) {
      this.config = config;
      this.logger = logger;
      this.websocket = ws;
   }

   start() {
      const ws = this.websocket.Server(this.config.WebSocket);
      this.logger.info(`[p ${process.pid}] Web Socket Listening at port ${port}`);
      // resolve();
      return ws;
   }
}
module.exports = WSServer;