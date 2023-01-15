// pages/question/answer/answer.js
Page({

  wifiForm: function(e) {
   console.log(e.detail.value.wifiname);
   var that = this;
    that.setData({
   input1:e.detail.value.wifiname,
     }); 
 },
  outquestion:function(e){
   var viewLeft=this.data.viewLeft;
   viewLeft+=100;
   this.setData({
   viewLeft:viewLeft
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
   wx.request({
     url: 'https://nick.cab/qa/answer?question='+getkey, //本地服务器地址
   method:"GET",
    header: { 
      // "Content-Type": "application/json" //GET方式
       "Content-Type": "application/x-www-form-urlencoded"
    },
   success:(res)=>{
    console.log(res.data.msg);  
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