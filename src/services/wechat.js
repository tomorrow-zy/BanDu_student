
export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}

export function getOpenId () {
  return wx.cloud.callFunction({
    name: 'getOpenId'
  })
}

export function getUserInfo () {
  return wx.cloud.callFunction({
    name: 'getUserInfo'
  })
}
