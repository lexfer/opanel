// class Server {
//    constructor(options) {
//       this.serverIP = options.ip || '127.0.0.1'
//       this.serverPort = options.port || 8080
//    }

//    connect() {
//       const socket = new WebSocket(`ws://${this.serverIP}:${this.serverPort}/ws`);

//       socket.onopen = function (e) {
//          console.log("[open] Соединение установлено");
//          console.log("Отправляем данные на сервер");
//          socket.send("Меня зовут Джон");
//       };

//       socket.onmessage = function (event) {
//          alert(`[message] Данные получены с сервера: ${event.data}`);
//       };
//    }
// }


function startWEBsocket() {
  const socket = new WebSocket('ws://127.0.0.1:8080', ["soap", "wamp"]);

  socket.onopen = function (e) {
    console.log("[open] Соединение установлено");
    console.log("Отправляем данные на сервер");
    socket.send("Меня зовут Джон");
  };

  socket.onmessage = function (event) {
    console.log(`[message] Данные получены с сервера: ${event.data}`);
  };

  socket.onclose = function (event) {
    if (event.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
      // например, сервер убил процесс или сеть недоступна
      // обычно в этом случае event.code 1006
      console.log('[close] Соединение прервано');
    }
    setTimeout(function(){startWEBsocket()}, 5000);
  };

  socket.onerror = function (error) {
    console.error(`[error] ${error.message}`);
  };
}

startWEBsocket()