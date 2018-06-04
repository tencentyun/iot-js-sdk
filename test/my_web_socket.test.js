const assert = require('assert')
const MyWebSocket = require('../src/my_web_socket')

describe('my_web_socket.test.js', function() {
  this.timeout(10 * 1000);

  it('echo.websocket.org test', (done) => {
    const ws = new MyWebSocket('wss://echo.websocket.org/', {
      origin: 'https://websocket.org'
    });

    let sendData;
    let isOpen = false;
    let isOnmessage = false;
    let isError = false;

    ws.onopen = function open() {
      isOpen = true;
      sendData = String(Date.now())
      ws.send(sendData);
    };

    ws.onclose = function close() {
      assert(isOpen === true)
      assert(isOnmessage === true)
      assert(isError === false);
      done()
    };

    ws.onerror = function (event) {
      isError = true;
    }

    ws.onmessage = function incoming(event) {
      assert(sendData === event.data);
      isOnmessage = true;

      ws.close()
    };
  })
})