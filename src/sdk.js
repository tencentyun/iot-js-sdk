const Request = require('./request')
const MyWebSocket = require('./my_web_socket')
const IotWebSocket = require('./iot_web_socket')

class Sdk {
  constructor(options) {
    options = options || {}

    this.request = new Request()
    // this.ws = new IotWebSocket()
  }
}

exports = module.exports = Sdk;
exports.Request = Request;
exports.MyWebSocket = MyWebSocket;
exports.IotWebSocket = IotWebSocket;