const Request = require('./request')
const MyWebSocket = require('./my_web_socket')
const IotWebSocket = require('./iot_web_socket')

class Sdk {
  constructor(options) {
    options = options || {}

    if (!options.AppKey) {
      throw new Error('must provide `AppKey`')
    }

    this.AppKey = options.AppKey;
    this.AccessToken = null

    this.request = new Request()
    this.ws = new IotWebSocket()
  }

  callYunApi(options) {
    const self = this;

    const ActionParams = flattenArray(options.ActionParams)

    if (!ActionParams.AccessToken && self.AccessToken) {
      ActionParams.AccessToken = self.AccessToken
    }

    return self.ws.call('YunApi', {
      AppKey: self.AppKey,
      Action: options.Action,
      ActionParams: ActionParams
    }).then(function (response) {
      return response.data.Response
    })
  }

  login(options) {
    const self = this;
    self.AccessToken = options.AccessToken;
    return new Promise(function (resolve, reject) {
      resolve({
        error: '',
        error_message: '',
        data: true,
      })
    })
  }

  call() {
    return this.ws.call.apply(this.ws, arguments);
  }

  /*
  fn(dataObj);
   */
  onPush(fn) {
    const self = this;
    self.ws.on('push', fn);
  }
}

exports = module.exports = Sdk;
exports.Request = Request;
exports.MyWebSocket = MyWebSocket;
exports.IotWebSocket = IotWebSocket;

function flattenArray(input, prefix = '') {
  let output = {}

  for (const key in input) {
    const value = input[key]
    if (typeof value === 'object') {
      Object.assign(output, flattenArray(value, `${prefix}${key}.`))
    } else {
      output[`${prefix}${key}`] = value;
    }
  }

  return output
}