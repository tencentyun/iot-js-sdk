const assert = require('assert')
const Sdk = require('..')
const MyWebSocket = Sdk.MyWebSocket

describe.skip('my_web_socket.test.js', function() {
  this.timeout(10 * 1000);

  it('echo.websocket.org test', (done) => {
    const ws = new MyWebSocket('wss://echo.websocket.org/', {
      origin: 'https://websocket.org'
    });

    let sendData;
    let isOpen = false;
    let isOnmessage = false;
    let isError = false;

    ws.onOpen(function () {
      isOpen = true;
      sendData = String(Date.now())
      ws.send(sendData);
    });

    ws.onClose(function () {
      assert(isOpen === true)
      assert(isOnmessage === true)
      assert(isError === false);
      done()
    })

    ws.onError(function (event) {
      isError = true;
    })

    ws.onMessage(function (event) {
      assert(sendData === event.data);
      isOnmessage = true;

      ws.close()
    });
  })
})