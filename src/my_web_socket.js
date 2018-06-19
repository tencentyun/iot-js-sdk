const envDetect = require('./env_detect')

let isomorphicWs

if (!envDetect.isMiniProgram) {
  isomorphicWs = require('isomorphic-ws')
}

class MyWebSocket {
  constructor(url, options) {
    this.options = options || {};
    this.url = url;
    this.origin = this.options.origin;

    this.wxWs = null;
    this.ws = null;

    this._initWs()
  }

  _initWs() {
    if (envDetect.isMiniProgram) {
      this.wxWs = wx.connectSocket({
        url: this.url,
        header: {
          origin: this.origin,
        }
      })
    } else if (envDetect.isNode) {
      this.ws = new isomorphicWs(this.url, {
        origin: this.origin,
      });
    } else if (envDetect.isBrowser) {
      this.ws = new isomorphicWs(this.url);
    }
  }

  send(data) {
    if (envDetect.isMiniProgram) {
      this.wxWs.send({
        data: data,
      })
    } else {
      this.ws.send(data)
    }
  }

  close(code, reason) {
    if (envDetect.isMiniProgram) {
      this.wxWs.close({
        code: code,
        reason: reason,
      })
    } else {
      this.ws.close(code, reason)
    }
  }

  onOpen(callback) {
    if (envDetect.isMiniProgram) {
      this.wxWs.onOpen(callback)
    } else {
      this.ws.addEventListener('open', callback)
    }
  }

  onClose(callback) {
    if (envDetect.isMiniProgram) {
      this.wxWs.onClose(callback)
    } else {
      this.ws.addEventListener('close', callback)
    }
  }

  onMessage(callback) {
    if (envDetect.isMiniProgram) {
      this.wxWs.onMessage(callback)
    } else {
      this.ws.addEventListener('message', callback)
    }
  }

  onError(callback) {
    if (envDetect.isMiniProgram) {
      this.wxWs.onError(callback)
    } else {
      this.ws.addEventListener('error', callback)
    }
  }
}

module.exports = MyWebSocket