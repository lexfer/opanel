'use strict'
const config = require('config')
const http = require('http');
const WebSocket = require('ws');
const AmiClient = require('asterisk-ami-client');

const AMI = config.get('AMI')
const WS = config.get('WS')

const wss = new WebSocket.Server({ port: WS.port });
const client = new AmiClient({ reconnect: true, keepAlive: false });

client.connect(AMI.user, AMI.password, { host: AMI.host, port: AMI.port })
   .then(amiConnection => {
      client
         .on('connect', () => console.log('connect'))
         .on('event', event => forward(event))
         // .on('event', event => console.log(event))
         .on('data', chunk => console.log(chunk))
         .on('response', response => console.log(response))
         .on('disconnect', () => console.log('disconnect'))
         .on('reconnection', () => console.log('reconnection'))
         .on('internalError', error => console.log(error))
      // .action({
      //    Action: 'Ping'
      // });

   })
   .catch(error => console.log(error));

function forward(obj) {
   wss.clients.forEach(function each(ws) {
      ws.send(JSON.stringify(obj))
      console.log("Send data to client",
         ws._socket.remoteAddress,
         ws._socket.remotePort)
   });
}

wss.on('connection', function connection(ws) {
   ws.isAlive = true;
   ws.on('pong', heartbeat);
   console.log('Connecting client',
      ws._socket.remoteAddress,
      ws._socket.remotePort
   )
});

function noop() { }

function heartbeat() {
   console.log('heartbeat(): set isAlive')
   this.isAlive = true;
}

const interval = setInterval(function ping() {
   wss.clients.forEach(function each(ws) {
      if (ws.isAlive === false) return ws.terminate();
      ws.isAlive = false;
      console.log('set isAlive = false')

      ws.ping(noop);
   });
}, 30000);

wss.on('close', function close() {
   console.log("close connection")
   clearInterval(interval);
});
