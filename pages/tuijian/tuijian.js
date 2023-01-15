// pages/china/china.js
Page({

  /**
   * 页面的初始数据
   */
  change:function(){
    this.onLoad()
},
detail:function(e){
  var index=e.currentTarget.dataset.hi5;
  var id=e.currentTarget.dataset.hi4;
 // console.log(e);
 // console.log(e.currentTarget.dataset.hi4);
 // console.log(id);
      wx.navigateTo({
    url: '../details/details?idx='+id+'&indexs='+index,
  })
},
  data: {
    array:[],
    len:0,
    id:'',
    index:'',
},
method:{

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var num=5;
    wx.request({
      url: 'https://nick.cab/api/recommend/get/'+num, //本地服务器地址
      //已经弄好了随机抽出,num代表一次抽出的数量
   method:"GET",
     header: { 
       // "Content-Type": "application/json" //GET方式
        "Content-Type": "application/x-www-form-urlencoded"
     },
   success:(res)=>{ //res就是接收后台返回的数据
     console.log(res.data);  
   var _this = this;
  // var detail=http://nick.cab/photo/xuewei/79eff9e3-e9cb-449a-8be3-4961780127ad.jpg
   _this.setData({
    array:res.data.data,
    len:res.data.data.length,
    });
   },
   fail:function(res){
     console.log("--------fail--------");
   }
 })
  },

})
