// pages/question/question.js
Page({

   wifiForm: function(e) {
    console.log(e.detail.value.wifiname);
    var that = this;
     that.setData({
    input:e.detail.value.wifiname,
      }); 
      wx.navigateTo({
        url: '/pages/question/question2/question2?keyword='+e.detail.value.wifiname,
      })
  },
  hot:function(e){
  //  console.log(e);
console.log(e.currentTarget.dataset.hot);
this.setData({
  content:e.currentTarget.dataset.hot,
})
  },
  clear:function(e){
    this.setData({
      content:'',
    })
  },
data:{
input:0,
keyword:0,
viewLeft:0,
key:0,
content:'输入想要问的问题',
},

/**扫码 */


})