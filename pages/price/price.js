Page({

  input1:function(e){
    console.log(e.detail.value);
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
    url: '../pricelist/pricelist?keyword='+event.target.dataset.hi
  })
},
hot:function(e){
  //  console.log(e);
console.log(e.currentTarget.dataset.hot);
wx.navigateTo({
  url: '../pricelist/pricelist?keyword='+e.currentTarget.dataset.hot
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