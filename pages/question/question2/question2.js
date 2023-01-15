// pages/question/question2/question2.js
// pages/question/question.js
Page({

  wifiForm: function(e) {
   console.log(e.detail.value.wifiname);
   var that = this;
    that.setData({
   input1:e.detail.value.wifiname,
     }); 
 },
  look:function(e){
    console.log(e.currentTarget.dataset.key);
    var name=e.currentTarget.dataset.key;
    wx.navigateTo({
      url: '/pages/question/answer/answer?keyword='+name,
    })
  },
data:{
input1:0,
keyword:0,
viewLeft:0,
key:0,
array:[],
},

/**扫码 */

onLoad(options) {
 //http://182.61.29.241:6001/qa/search?question=胃痛    问题提问接口
 //http://182.61.29.241:6001/qa/answer?question=胃疼胸疼   接受回答接口
var getkey=options.keyword;
console.log(getkey);
 //var getkey=options.input1;
 this.setData({
   key:getkey,
 })
 console.log("get:"+getkey);
 if(getkey!=0){
  wx.showToast({
    title: '询问中',
    icon:'loading',
    duration: 1000
  })
   wx.request({
     url: 'https://nick.cab/qa/search?question='+getkey, //本地服务器地址
   method:"GET",
    header: { 
      // "Content-Type": "application/json" //GET方式
       "Content-Type": "application/x-www-form-urlencoded"
    },
   success:(res)=>{
    console.log(res);  
    this.setData({
      array:res.data.msg,
    })
  
   },
   
   fail:function(res){
    console.log("--------fail--------");

   }
   })
   
 }
 else{
   console.log("getkey is fault:"+getkey)
 }

},

})