# 腾讯云 IoT JS SDK

这个 SDK 的目标是同时工作于以下环境：

* 小程序。使用 `dist/iot_sdk.miniprogram.js`
* Node.js。直接 require 此包
* 浏览器 or React Native。使用 `dist/iot_sdk.browser.js`

## 安装

```bash
$ npm i tencent-iot-js-sdk
```

## 示例

```js
const SDK = require('tencent-iot-js-sdk')

async function main() {
  const sdk = new SDK({
    // 从控制台申请一个应用，会得到 AppKey
    AppKey: 'xxxxxxx',
  });

  // 接收服务器的推送
  sdk.onPush(function (data) {
    console.log(`onPush %j`, data)
  })
  
  // 调用云api方法登录
  let response = await sdk.callYunApi({
    Action: 'AppGetToken',
    ActionParams: {
      UserName: 'iotappuser',
      Password: 'xxxx',
    }
  })
  // 获取登录令牌
  const AccessToken = response.AccessToken
  
  // 绑定登录令牌
  sdk.bindAccessToken(AccessToken);
  
  // 获取用户名下的设备列表
  response = await sdk.callYunApi({
    Action: 'AppGetDevices',
    ActionParams: {
    }
  })
  
  console.log(`AppGetDevices %j`, response)
    
}

main()
```

## 方法

### constructor

`AppKey`：每个app都有对应的 AppKey，在控制台的应用管理中的 secretId 就是 AppKey。一个app只能操作它有权限的产品，不能跨产品操作。

`AccessToken`：登录之后服务器会返回 AccessToken，用于标记一个用户的会话。这个参数也可以后面再通过 bindAccessToken 传入。

```js
new SDK({
  AppKey: 'xxxx',
  AccessToken: 'yyyyyy',
})
```

### callYunApi(options)

* `options.Action` 云方法名
* `options.ActionParams` 方法对应的参数

`Version` 默认为 `2018-01-23`

云api的文档在：https://cloud.tencent.com/document/product/568/16436

### bindAccessToken(AccessToken)

登录之后，调用这个接口绑定 AccessToken。这样在调用云api时，就不用手动传 AccessToken 参数了。

登录方式有多种，请参照 API 文档中的登录部分，并通过 `callYunApi` 进行登录。

### activePush()

sdk 会在以下两种情况下自动绑定 websocket 与设备推送的映射关系：

1. websocket 连接建立时
2. bindAccessToken 时。

一般是够用的，但有些情况下，需要开发者手动调用 `activePush()` 来绑定：

1. 用户添加了新设备时，新设备并不会与 websocket 自动绑定。

### onPush(dataObj)

接收服务器推送的各种消息，通过 action 来标记不同消息类型。


#### action: 'DeviceChange'

当设备数据变更或者设备上下线时，

`dataObj.action === 'DeviceChange'`

`dataObj.params` 的形式为 

```js
{
  type: changeType, // 'dataChange' or 'upAndDown'
  time: time, // 2018-05-15 22:09:07
  deviceId: deviceId, // iot-ohmfh2cs@G10A01_kit_1_222
}
``` 

## license

MIT