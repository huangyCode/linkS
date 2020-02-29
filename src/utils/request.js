
const wxRequest = async(url,params = {}) => {
  const wxSession = wx.getStorageSync('sessionKey')
  let data = params.query || {}
  return new Promise(async(resolve, reject) => {
    await wx.request({
      url: url,
      method: params.method === 'FORM' ? 'POST' : params.method || 'GET',
      data: data,
      header: {
        'Content-Type': params.method === 'FORM' ? 'application/x-www-form-urlencoded ' : 'application/json;charset=UTF-8;',
        // 'Authorization': data.wxSession,
        // 'Cookie': 'JSESSIONID=' + wxSession,
        'token': wx.getStorageSync('token')
      },
      success: data => {
        console.log(data)
        if (data.header.token) {
          wx.setStorageSync('token', data.header.token)
        }
        if (data.statusCode === 401) {
         
        }
        resolve(data.data)
      },
      fail: e => {
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '网络异常, 请求超时！',
          success: function () {
            // wx.clearStorage()
            // wx.redirectTo({url: '/pages/login/login'})
          }
        })
        reject(e)
      }
    })
  })
}

export default wxRequest
