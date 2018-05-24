const Request = require('./request')

class Sdk {
  constructor(options) {
    options = options || {}

    this.request = new Request()
  }
}

module.exports = Sdk;