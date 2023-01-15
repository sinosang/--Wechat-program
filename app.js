// app.js
App({
  getCode: function(){
    console.log(111);
    var _this = this;
    wx.scanCode({        //扫描API
      success: function(res){
        console.log(res);    //输出回调信息
        _this.setData({
          qRCodeMsg: res.result
        });
        wx.showToast({
          title: '成功',
          duration: 2000
        })
      }
    })
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
