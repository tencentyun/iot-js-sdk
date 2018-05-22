class Request {
  axios = null;

  constructor(options) {
    if (options.axios) {
      this.axios = options.axios;
    }

  }
}


module.exports = Request;