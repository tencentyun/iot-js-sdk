const envDetect = require('./env_detect')

let isomorphicWs

if (!envDetect.isMiniProgram) {
  isomorphicWs = require('isomorphic-ws')
}


class myWebSocket {
  constructor() {

  }


}

module.exports = myWebSocket