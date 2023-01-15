// pages/disease/disease.js
Page({

  /**
   * 页面的初始数据
   */
  change:function(e){
    let data=e.currentTarget.dataset.hi;
    let len=e.currentTarget.dataset.hi2;
    var index=e.currentTarget.dataset.hi3;
   // console.log("index:"+index);
    page1=this.data.page2;
    num1=this.data.num2;
//console.log("array:",data);
//console.log("传给2的page:"+page1+"传给2的num:"+num1);
//console.log("len:"+len);
//console.log("all:",e);
   wx.redirectTo({
     url: '../disease2/disease2?pagex='+page1+'&numx='+num1+'&indexs='+index,
   })
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
    page2:0,
    num2:10,
    page1:0,
    num1:0,
  array:[],
  indexuse:'',
  len:0,
},
method:{

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("第一页面");
    var page=this.data.page1;
    var num=this.data.num2;
    var index=this.options.indexs;
    //加上this来调用data中数据
    console.log("index:"+index);
    console.log("page:"+page);
    console.log("num:"+num);
    this.setData({
      indexuse:index,
    })
   wx.request({
    url: 'https://nick.cab/api/search/get/'+index+'/%20/'+page+'/'+num, //本地服务器地址
    //已经弄好了随机抽出,num代表一次抽出的数量
 method:"GET",
   header: { 
     // "Content-Type": "application/json" //GET方式
      "Content-Type": "application/x-www-form-urlencoded"
   },
 success:(res)=>{ //res就是接收后台返回的数据
  //num=num+10;
 // page=page+10;
   console.log(res.data);  
this.setData({
  array:res.data.data,
  len:res.data.data.length,
  page2:res.data.data.length,
  
})
 },
 fail:function(res){
   console.log("--------fail--------");
 }
})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})