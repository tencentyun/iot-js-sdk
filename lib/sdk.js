const Request = require('./request')

class Sdk {
  /*
    如果是在node或者browser环境，axios需要用户从外部传入。否则使用 `wx.request` 来发请求。
  */
  constructor(options) {
    options = options || {}

    this.request = new Request({
      axios: options.axios,
    })
  }
}

module.exports = Sdk;