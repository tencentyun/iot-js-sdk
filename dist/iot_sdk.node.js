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

    this.url = url;
    this.options = options || {};
    this.origin = this.options.origin;
    this.wxWs = null;
    this.ws = null;

    this._initWs();
  }

  _createClass(MyWebSocket, [{
    key: "_initWs",
    value: function _initWs() {
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
    key: "onopen",
    set: function set(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onOpen(callback);
      } else {
        this.ws.onopen = callback;
      }
    }
  }, {
    key: "onclose",
    set: function set(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onClose(callback);
      } else {
        this.ws.onclose = callback;
      }
    }
  }, {
    key: "onmessage",
    set: function set(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onMessage(callback);
      } else {
        this.ws.onmessage = callback;
      }
    }
  }, {
    key: "onerror",
    set: function set(callback) {
      if (envDetect.isMiniProgram) {
        this.wxWs.onError(callback);
      } else {
        this.ws.onerror = callback;
      }
    }
  }]);

  return MyWebSocket;
}();

module.exports = MyWebSocket;

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

var Request = __webpack_require__(/*! ./request */ "./src/request.js");

var MyWebSocket = __webpack_require__(/*! ./my_web_socket */ "./src/my_web_socket.js");

var Sdk = function Sdk(options) {
  _classCallCheck(this, Sdk);

  options = options || {};
  this.request = new Request(); // this.ws = new MyWebSocket()
};

exports = module.exports = Sdk;
exports.Request = Request;
exports.MyWebSocket = MyWebSocket;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-ws":
/*!********************************!*\
  !*** external "isomorphic-ws" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-ws");

/***/ })

/******/ });
});