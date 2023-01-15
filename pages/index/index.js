// index.js
// 获取应用实例
const app = getApp()

Page({
  goto:function(){
    wx.navigateTo({
      url: '../search2/search2',
    })
      },
      goto2:function(){
        wx.navigateTo({
          url: '../paizhao/paizhao',
        })
          },
          goto3:function(){
            wx.switchTab({
              url: '../question/question',
            })
              },
      likebtn:function(){
        wx.navigateTo({
          url: '../like/like',
        })
          },
          setting:function(){
            wx.navigateTo({
              url: '../setting/setting',
            })
              },
              
          onLoad:function(){
            let user=wx.getStorageSync('user1')
          //  console.log("user",user)
            this.setData({
              userInfo:user
            })
          },
          // dianji:function(){
          //   // console.log("点击了确定按钮")
          //   wx.login({
          //     success: function (res) {
          //         console.log("res",res)
          //          if (res.code) {
          //           console.log('code:',res.code)
          //              wx.request({
          //               url: 'https://nick.cab/api/user/weixin/passport/login',
          //                //url: 'https://api.weixin.qq.com/sns/jscode2session',
          //                data: {
          //                   //填上自己的小程序唯一标识
          //                  appid: 'wxb78431947ec6cec',
          //                   //填上自己的小程序的 app secret
          //                  secret: '9ce06eda4cc99398773cf6413b801e59',
          //                  grant_type: 'authorization_code',
          //                  js_code: res.code
          //                },
          //                method: 'GET',
          //                header: { 'content-type': 'application/json'},
          //                success: function(openIdRes){
          //                     console.info("登录成功，通过login接口的code换取openid，返回的openId：" + openIdRes.data.openid);
          //                },
          //                fail: function(error) {
          //                    console.info("获取用户openId失败");
          //                    console.info(error);
          //                }
          //             })
          //           }
          //         }
          //     });
          //   wx.getUserProfile({
          //      desc: '获取用户的信息',
          //      success:res => {
          //        let user=res.userInfo
          //        wx.setStorageSync('user1', user)
          //       console.log("成功",res)
          //       this.setData({
          //         userInfo:user   
          //       })
          //   },
          //   fail:res=>{
          //     console.log("失败",res)
          //   }
          // })},
         tui:function(){
           this.setData({
            userInfo:""
           })
           wx.setStorageSync('user1', null)
         },
         getUserProfile(){
          wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log("获取用户信息成功", res)
            let user = res.userInfo;  //我因为需求用了，但实际上不需要
            app.globalData.userInfo = res.userInfo; //同上
            wx.setStorageSync('user', user)  //同上
            console.log(res.userInfo.nickName);
            this.setData({
                isShowUserName: true,  //同上
                userInfo: user, //同上
                bgPic: res.userInfo.avatarUrl,  //主要是这句话有作用
                username: res.userInfo.nickName,
            }); 
          },
          fail: res => {
            console.log("获取用户信息失败", res)
          }
         })
        },
      
  data: {
    userInfo:"",
    motto: 'Hello ',
    hasUserInfo: false,
    username: null,
    bgPic: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,// 如需尝试获取用户信息可改为false
  },
 
 

})
