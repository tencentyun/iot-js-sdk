const assert = require('assert')
const Sdk = require('..')
const IotWebSocket = Sdk.IotWebSocket
const delay = require('delay')

describe('iot_web_socket.test.js', function () {
  this.timeout(10 * 1000);
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

    await delay(1 * 1000);

    assert(isOpenCallback);
    assert(isCloseCallback);
    assert(response.data.Response.Error);
  })
})