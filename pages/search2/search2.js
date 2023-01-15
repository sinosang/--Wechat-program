Page({

  getCode: function(){    
    var _this = this;
    wx.scanCode({        //扫描API
      success: function(res){  
         let sendid=res.result;  
        _this.setData({
          qRCodeMsg: res.result,   //将这个结果res.result传回后台进行匹配数据输出结果
        });
         console.log(res);
         console.log(sendid);
        wx.navigateTo({
          url: '../scan/scan?id='+sendid
          // url: '../scan/scan?id=${qRCodeMsg}',
        })
       
      }, 
      fail: (res) => {
        console.log(res);
        wx.showToast({
          title: '扫描失败',
          icon:'error',
          duration: 2000
        })
      },   
    })
  },
  input1:function(e){
    console.log("输入：",e.detail.value);
    var that = this;
     that.setData({
    input1:e.detail.value,
      }); 
   },
 searchresult:function(event){
 // console.log(input1);
 //在input中的target中的datset中的hi中找到
  //  console.log(input1.target.dataset.hi);
  wx.navigateTo({
    url: '../searchlist/searchlist?keyword='+event.target.dataset.hi
  })
},
hot:function(e){
  //  console.log(e);
console.log(e.currentTarget.dataset.hot);
this.setData({
  content:e.currentTarget.dataset.hot,
})
wx.navigateTo({
  url: '../searchlist/searchlist?keyword='+e.currentTarget.dataset.hot
})
  },
   paizhao:function(e){
    wx.navigateTo({
      url: '../paizhao/paizhao'
    })
   },          
data:{
input1:0,
keyword:0,

},

/**扫码 */

onLoad(options) {
  
},
})