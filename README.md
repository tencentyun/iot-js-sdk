# 腾讯云 IoT JS SDK

这个 SDK 的目标是同时工作于以下环境：

* 小程序。使用 `dist/iot_sdk.miniprogram.js`
* Node.js。使用 `dist/iot_sdk.node.js`
* 浏览器。使用 `dist/iot_sdk.browser.js`

## TODO

* env_detect 通过 Object.defineProperty 实现
* 增加同构ws实现
* 惰性建立ws连接
* 加上babel的支持

## license

MIT