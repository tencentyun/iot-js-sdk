exports.isMiniProgram = function () {
  // 通过关键 api 是否存在来判断小程序环境
  try {
    return !!(global.wx && wx.request && wx.connectSocket);
  } catch (e) {
    return false;
  }
}

exports.isBrowser = function () {
  try {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined' && !exports.isMiniProgram()
  } catch (e) {
    return false;
  }
}

exports.isNode = function () {
  try {
    return !!process.versions.node
  } catch (e) {
    return false;
  }
}