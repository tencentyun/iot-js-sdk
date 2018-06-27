const Request = require('./request')
const MyWebSocket = require('./my_web_socket')
const IotWebSocket = require('./iot_web_socket')

class Sdk {
  constructor(options) {
    options = options || {}

    this.app_key = options.app_key;

    this.request = new Request()
    this.ws = new IotWebSocket()
  }

  callYunApi(options) {
    const self = this;

    return self.ws.call('YunApi', {
      AppKey: self.app_key,
      Action: options.Action,
      ActionParams: options.ActionParams
    }).then(function (response) {
      return response.data.Response
    })
  }
}

exports = module.exports = Sdk;
exports.Request = Request;
exports.MyWebSocket = MyWebSocket;
exports.IotWebSocket = IotWebSocket;