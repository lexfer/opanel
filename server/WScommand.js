"use strict";

class WScommand {

   constructor(wss){
      this.wss = wss;
   } 

   sendBroadcast(msg) {
      this.wss.clients.forEach(function each(ws) {
         ws.send(JSON.stringify(msg))
         console.log("Send data to client",
            ws._socket.remoteAddress,
            ws._socket.remotePort)
      });
   }

}

module.exports = WScommand;

