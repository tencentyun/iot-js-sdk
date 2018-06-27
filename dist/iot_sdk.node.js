(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TencentIotSdk"] = factory();
	else
		root["TencentIotSdk"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sdk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/env_detect.js":
/*!***************************!*\
  !*** ./src/env_detect.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.isMiniProgram = function () {
  // 通过关键 api 是否存在来判断小程序环境
  try {
    return !!(wx && wx.request && wx.connectSocket);
  } catch (e) {
    return false;
  }
}();

exports.isBrowser = function () {
  try {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined' && !exports.isMiniProgram;
  } catch (e) {
    return false;
  }
}();

exports.isNode = function () {
  try {
    return !!process.versions.node;
  } catch (e) {
    return false;
  }
}();

/***/ }),

/***/ "./src/iot_web_socket.js":
/*!*******************************!*\
  !*** ./src/iot_web_socket.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyWebSocket = __webpack_require__(/*! ./my_web_socket */ "./src/my_web_socket.js");

var debug = __webpack_require__(/*! debug */ "debug")('iot:iot_web_socket');

var throttle = __webpack_require__(/*! lodash.throttle */ "lodash.throttle");

var IotWebSocket =
/*#__PURE__*/
function () {
  function IotWebSocket(url, options) {
    _classCallCheck(this, IotWebSocket);

    this.url = url || 'ws://iot-ws.tencentcs.com/';
    this.options = options || {}; // 心跳的间隔时间

    this.hearbeatInterval = this.options.hearbeatInterval || 20 * 1000;
    this.reconnectInterval = this.options.reconnectInterval || 1 * 1000;
    this.ws = null;
    this.isOpen = false; // 用来标记一个唯一的 reqId，每次使用后自增

    this.reqIdCount = 0; // 记录 reqId 对应的处理函数

    this.reqIdCallbacks = {}; // 记录绑定的所有函数，在重启的时候恢复

    this.onOpenCallbacks = [];
    this.onCloseCallbacks = [];
    this.onMessageCallbacks = [];
    this.onErrorCallbacks = []; // 保存 setInterval 的结果

    this.heartbeatTimer = null; // 连接未建立前，将send调用的消息放在这里

    this.sendQueue = []; // reconnect 每个间隔只处理一次调用

    this.reconnect = throttle(this._reconnect, this.reconnectInterval); // 手动关闭

    this.manuallyClose = false;
    this.init();
  }

  _createClass(IotWebSocket, [{
    key: "init",
    value: function init() {
      var self = this;
      self.ws = new MyWebSocket(self.url, self.options); // 批量注册用户设定的事件函数

      [['onOpen', self.onOpenCallbacks], ['onClose', self.onCloseCallbacks], ['onMessage', self.onMessageCallbacks], ['onError', self.onErrorCallbacks]].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            eventName = _ref2[0],
            eventCallbacks = _ref2[1];

        eventCallbacks.forEach(function (cb) {
          self.ws[eventName](cb);
        });
      });
      self.ws.onMessage(function (event) {
        var data;

        try {
          data = JSON.parse(event.data);
        } catch (e) {
          console.log("onMessage parse event.data error: ".concat(event.data));
          return;
        }

        debug("on message data: %o", data);

        if (data.reqId !== void 0 && self.reqIdCallbacks[data.reqId]) {
          self.reqIdCallbacks[data.reqId](data); // 这些 reqIdCallback 都是一次性的，要及时删除防止内存泄露

          delete self.reqIdCallbacks[data.reqId];
        }
      });
      self.ws.onOpen(function () {
        self.isOpen = true;
        self.sendQueue.forEach(function (data) {
          self.send(data);
        });
        self.sendQueue = [];
        self.initHeartbeat();
      });
      self.ws.onClose(function () {
        if (self.manuallyClose) {
          return;
        }

        self.reconnect();
      });
      self.ws.onError(function (err) {
        console.error('websocket on error', err.message);
        self.reconnect();
      });
    }
  }, {
    key: "initHeartbeat",
    value: function initHeartbeat() {
      var self = this;
      this.heartbeatTimer = setInterval(function () {
        self.heartbeat();
      }, self.hearbeatInterval);
    }
  }, {
    key: "heartbeat",
    value: function heartbeat() {
      var self = this;
      self.call('Hello');
    }
  }, {
    key: "_reconnect",
    value: function _reconnect() {
      this.isOpen = false;
      debug("reconnect");
      clearInterval(this.heartbeatTimer);
      this.init();
    }
  }, {
    key: "call",
    value: function call(action, params) {
      debug("call action %o, params %o", action, params);
      var self = this;
      return new Promise(function (resolve, reject) {
        var reqId = self.reqIdCount++;
        var message = JSON.stringify({
          action: action,
          reqId: reqId,
          params: params
        });

        self.reqIdCallbacks[reqId] = function (response) {
          resolve(response);
        };

        self.send(message);
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      var self = this;

      if (!self.isOpen) {
        self.sendQueue.push(data);
        return;
      }

      this.ws.send(data);
    }
  }, {
    key: "close",
    value: function close() {
      debug("closing websocket");
      clearInterval(this.heartbeatTimer);
      this.manuallyClose = true;
      this.ws.close.apply(this.ws, arguments);
    }
  }, {
    key: "onOpen",
    value: function onOpen(callback) {
      this.onOpenCallbacks.push(callback);
      this.ws.onOpen(callback);
    }
  }, {
    key: "onClose",
    value: function onClose(callback) {
      this.onCloseCallbacks.push(callback);
      this.ws.onClose(callback);
    }
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      this.onMessageCallbacks.push(callback);
      this.ws.onMessage(callback);
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      this.onErrorCallbacks.push(callback);
      this.ws.onError(callback);
    }
  }]);

  return IotWebSocket;
}();

exports = module.exports = IotWebSocket;

/***/ }),

/***/ "./src/my_web_socket.js":
/*!******************************!*\
  !*** ./src/my_web_socket.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
这是一个websocket的同构层，同构了小程序，h5与node.js的websocket调用。
 */
var debug = __webpack_require__(/*! debug */ "debug")('iot:my_web_socket');

var envDetect = __webpack_require__(/*! ./env_detect */ "./src/env_detect.js");

var isomorphicWs;

if (!envDetect.isMiniProgram) {
  isomorphicWs = __webpack_require__(/*! isomorphic-ws */ "isomorphic-ws");
}

var MyWebSocket =
/*#__PURE__*/
function () {
  function MyWebSocket(url, options) {
    _classCallCheck(this, MyWebSocket);

    this.options = options || {};
    this.url = url;
    this.origin = this.options.origin;
    this.wxWs = null;
    this.ws = null;
    this.initWs();
  }

  _createClass(MyWebSocket, [{
    key: "initWs",
    value: function initWs() {
      if (envDetect.isMiniProgram) {
        this.wxWs = wx.connectSocket({
          url: this.url,
          header: {
            origin: this.origin
          }
        });
      } else if (envDetect.isNode) {
        this.ws = new isomorphicWs(this.url, {
          origin: this.origin
        });
      } else if (envDetect.isBrowser) {
        this.ws = new isomorphicWs(this.url);
      }
    }
  }, {
    key: "send",
    value: function send(data) {
      if (envDetect.isMiniProgram) {
        this.wxWs.send({
          data: data
        });
      } else {
        this.ws.send(data);
      }
    }
  }, {
    key: "close",
    value: function close(code, reason) {
      if (envDetect.isMiniProgram) {
        this.wxWs.close({
          code: code,
          reason: reason
        });
      } else {
        this.ws.close(code, reason);
      }
    }
  }, {
    key: "onOpen",
    value: function onOpen(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onOpen(callback);
      } else {
        this.ws.addEventListener('open', callback);
      }
    }
  }, {
    key: "onClose",
    value: function onClose(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onClose(callback);
      } else {
        this.ws.addEventListener('close', callback);
      }
    }
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onMessage(callback);
      } else {
        this.ws.addEventListener('message', callback);
      }
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onError(callback);
      } else {
        this.ws.addEventListener('error', callback);
      }
    }
  }]);

  return MyWebSocket;
}();

exports = module.exports = MyWebSocket;

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
这是一个 http 请求的同构层，同构了小程序，h5与node.js的websocket调用。
 */
var envDetect = __webpack_require__(/*! ./env_detect */ "./src/env_detect.js");

var axios;

if (!envDetect.isMiniProgram) {
  axios = __webpack_require__(/*! axios */ "axios");
}

var Request =
/*#__PURE__*/
function () {
  function Request(options) {
    _classCallCheck(this, Request);

    options = options || {};
    this.axios = axios;
  }

  _createClass(Request, [{
    key: "request",
    value: function request(options) {
      var self = this;
      options = self.transformReuqestOptions(options);

      if (envDetect.isMiniProgram) {
        return new Promise(function (resolve, reject) {
          var wxOptions = Object.assign({}, {
            success: function success(res) {
              resolve(res);
            },
            fail: function fail(err) {
              reject(err);
            }
          }, options);
          wx.request(wxOptions);
        });
      } else {
        var axiosOptions = {
          url: options.url,
          headers: options.header,
          method: options.method
        };

        if (options.method === 'GET') {
          axiosOptions.params = options.data;
        } else if (options.method === 'POST' && options.header['content-type'] === 'application/json') {
          axiosOptions.data = options.data;
        }

        return this.axios.request(axiosOptions).then(function (response) {
          return {
            data: response.data,
            statusCode: response.status,
            header: response.headers
          };
        });
      }
    }
  }, {
    key: "transformReuqestOptions",
    value: function transformReuqestOptions(options) {
      if (options.method) {
        options.method = options.method.toUpperCase();
      } else {
        options.method = 'GET';
      }

      if (options.method === 'POST') {
        options.header = options.header || {};
        options.header['content-type'] = options.header['content-type'] || 'application/json';
      }

      return options;
    }
  }]);

  return Request;
}();

module.exports = Request;

/***/ }),

/***/ "./src/sdk.js":
/*!********************!*\
  !*** ./src/sdk.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Request = __webpack_require__(/*! ./request */ "./src/request.js");

var MyWebSocket = __webpack_require__(/*! ./my_web_socket */ "./src/my_web_socket.js");

var IotWebSocket = __webpack_require__(/*! ./iot_web_socket */ "./src/iot_web_socket.js");

var Sdk =
/*#__PURE__*/
function () {
  function Sdk(options) {
    _classCallCheck(this, Sdk);

    options = options || {};
    this.app_key = options.app_key;
    this.request = new Request();
    this.ws = new IotWebSocket();
  }

  _createClass(Sdk, [{
    key: "callYunApi",
    value: function callYunApi(options) {
      var self = this;
      return self.ws.call('YunApi', {
        AppKey: self.app_key,
        Action: options.Action,
        ActionParams: options.ActionParams
      }).then(function (response) {
        return response.data.Response;
      });
    }
  }]);

  return Sdk;
}();

exports = module.exports = Sdk;
exports.Request = Request;
exports.MyWebSocket = MyWebSocket;
exports.IotWebSocket = IotWebSocket;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "isomorphic-ws":
/*!********************************!*\
  !*** external "isomorphic-ws" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-ws");

/***/ }),

/***/ "lodash.throttle":
/*!**********************************!*\
  !*** external "lodash.throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.throttle");

/***/ })

/******/ });
});