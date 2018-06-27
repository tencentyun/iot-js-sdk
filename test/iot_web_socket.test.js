const assert = require('assert')
const Sdk = require('..')
const IotWebSocket = Sdk.IotWebSocket

describe('iot_web_socket.test.js', function () {
  it('should work with ws://iot-ws.tencentcs.com/', async function () {
    const iotWebSocket = new IotWebSocket('ws://iot-ws.tencentcs.com/', {
      hearbeatInterval: 2 * 1000,
      reconnectInterval: 5 * 1000,
    })
    let isOpenCallback = false;
    let isCloseCallback = false;

    iotWebSocket.onOpen(async function () {
      isOpenCallback = true;
    })
    iotWebSocket.onClose(function (event) {
      isCloseCallback = true;
    })

    const response = await iotWebSocket.call('YunApi', {
      AppKey: 'AKIDomu564hU6ku2FOvH5pdMLYp5BKSVeEwX',
      Action: 'AppGetUser',
      ActionParams: {
      }
    })

    iotWebSocket.close()

    assert(!isOpenCallback);
    assert(!isCloseCallback);
    console.log('%j', response)
  })
})