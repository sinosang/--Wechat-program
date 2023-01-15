Page({
  data: {
   userInfo:""
  },
  onLoad(){
    let user=wx.getStorageSync('user1')
    console.log("1",user)
    this.setData({
      userInfo:user
    })
  },
  dianji(){
    console.log("点击了按按钮")
    wx.getUserProfile({
       desc: '获取用户的信息',
       success:res => {
         let user=res.userInfo
         wx.setStorageSync('user1', user)
        console.log("成功",res)
        this.setData({
          userInfo:user   
        })
    },
    fail:res=>{
      console.log("失败",res)
    }
  })},
 tui(){
   this.setData({
    userInfo:""
   })
   wx.setStorageSync('user1', null)
 }
})

//避免重复登录的代码
