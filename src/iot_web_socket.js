const MyWebSocket = require('./my_web_socket')
const debug = require('debug')('iot:iot_web_socket')
const throttle = require('lodash.throttle')

class IotWebSocket {
  constructor(url, options) {
    this.url = url || 'ws://iot-ws.tencentcs.com/'
    this.options = options || {}
    // 心跳的间隔时间
    this.hearbeatInterval = this.options.hearbeatInterval || 20 * 1000
    this.reconnectInterval = this.options.reconnectInterval || 1 * 1000;

    this.ws = null;
    this.isOpen = false;
    // 用来标记一个唯一的 reqId，每次使用后自增
    this.reqIdCount = 0;
    // 记录 reqId 对应的处理函数
    this.reqIdCallbacks = {}

    // 记录绑定的所有函数，在重启的时候恢复
    this.onOpenCallbacks = []
    this.onCloseCallbacks = [];
    this.onMessageCallbacks = []
    this.onErrorCallbacks = []

    // 保存 setInterval 的结果
    this.heartbeatTimer = null;
    // 连接未建立前，将send调用的消息放在这里
    this.sendQueue = []

    // reconnect 每个间隔只处理一次调用
    this.reconnect = throttle(this._reconnect, this.reconnectInterval);

    this.init()
  }


  init() {
    const self = this;

    self.ws = new MyWebSocket(self.url, self.options);

    // 批量注册用户设定的事件函数
    [
      ['onOpen', self.onOpenCallbacks],
      ['onClose', self.onCloseCallbacks],
      ['onMessage', self.onMessageCallbacks],
      ['onError', self.onErrorCallbacks]
    ].forEach(function ([eventName, eventCallbacks]) {
      eventCallbacks.forEach(function (cb) {
        self.ws[eventName](cb);
      })
    })

    self.ws.onMessage(function (event) {
      let data;
      try {
        data = JSON.parse(event.data)
      } catch (e) {
        console.log(`onMessage parse event.data error: ${event.data}`)
        return;
      }
      debug(`on message data: %o`, data);

      if (data.reqId !== void 0 && self.reqIdCallbacks[data.reqId]) {
        self.reqIdCallbacks[data.reqId](data);
        // 这些 reqIdCallback 都是一次性的，要及时删除防止内存泄露
        delete self.reqIdCallbacks[data.reqId];
      }
    })

    self.ws.onOpen(function () {
      self.isOpen = true;
      self.sendQueue.forEach(function (data) {
        self.send(data);
      })
      self.sendQueue = []

      self.initHeartbeat()
    })

    self.ws.onClose(function () {
      self.reconnect()
    })

    self.ws.onError(function (err) {
      console.error('websocket on error', err.message);

      self.reconnect()
    })
  }

  initHeartbeat() {
    const self = this;
    this.heartbeatTimer = setInterval(function () {
      self.heartbeat()
    }, self.hearbeatInterval)
  }

  heartbeat() {
    const self = this;
    self.call('Hello')
  }

  _reconnect() {
    this.isOpen = false;

    debug(`reconnect`);
    clearInterval(this.heartbeatTimer);

    this.init()
  }

  call(action, params) {
    debug(`call action %o, params %o`, action, params);
    const self = this;

    return new Promise(function (resolve, reject) {
      const reqId = self.reqIdCount++
      const message = JSON.stringify({
        action: action,
        reqId: reqId,
        params: params
      })
      self.reqIdCallbacks[reqId] = function (response) {
        resolve(response);
      }
      self.send(message)
    })
  }

  send(data) {
    const self = this;

    if (!self.isOpen) {
      self.sendQueue.push(data)
      return;
    }
    this.ws.send(data);
  }

  close() {
    debug(`closing websocket`);
    this.ws.close.apply(this.ws, arguments);
  }

  onOpen(callback) {
    this.onOpenCallbacks.push(callback)
    this.ws.onOpen(callback)
  }

  onClose(callback) {
    this.onCloseCallbacks.push(callback)
    this.ws.onClose(callback)
  }

  onMessage(callback) {
    this.onMessageCallbacks.push(callback)
    this.ws.onMessage(callback)
  }

  onError(callback) {
    this.onErrorCallbacks.push(callback)
    this.ws.onError(callback)
  }

}

exports = module.exports = IotWebSocket;