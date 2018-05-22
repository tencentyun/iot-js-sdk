const Request = require('./request')

class Sdk {
  request = null;

  constructor(options) {

    this.request = new Request({
      axios: options.axios,
    })
  }
}

module.exports = SDk;