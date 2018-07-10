# 腾讯云 IoT JS SDK

这个 SDK 的目标是同时工作于以下环境：

* 小程序。使用 `dist/iot_sdk.miniprogram.js`
* Node.js。直接 require 此包
* 浏览器。使用 `dist/iot_sdk.browser.js`

## 安装

```bash
$ npm i tencent-iot-js-sdk
```

## 示例

```js
const SDK = require('tencent-iot-js-sdk')

async function main() {
  const sdk = new SDK({
    // 从控制台申请一个应用，会得到 app_key
    app_key: 'xxxxxxx',
  });

  // 接收服务器的推送
  sdk.onPush(function (data) {
    console.log(`onPush %j`, data)
  })

  // 调用websocket服务器方法
  let response = await sdk.call('TvWaitBind', {
    TvId: 'aaaa',
  })

  console.log(response)
  
  // 调用云api方法
  response = await sdk.callYunApi({
    Action: 'AppGetUser',
    ActionParams: {
      AccessToken: 'haha'
    }
  })
  console.log(response)
}

main()
```

## 方法

### constructor

`app_key`：每个app都有对应的app_key，在控制台可以看到。一个app只能操作它有权限的产品，不能跨产品操作。

```js
new SDK({
  app_key: 'xxxx'
})
```

### callYunApi(options)

* `options.Action` 云方法名
* `options.ActionParams` 方法对应的参数

云api的文档在：https://cloud.tencent.com/document/product/568/16436

### call(action, actionParams)



## TODO

* [x] 增加同构ws实现
* [x] 加上babel的支持
* [x] npm发布第一版

## license

MIT