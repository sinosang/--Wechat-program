// pages/scan/scan.js
Page({

  /**
   * 页面的初始数据
   */
  exit:function(){
    wx.switchTab({
      url: '/pages/main/main', 
    })
  },
    code:"200",
  message:null,
    data:{
       
    },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
   var getid=options.id;
  this.setData({
     id:getid,
   });


    wx.request({
         url: 'https://nick.cab/api/scan/code/'+getid, //本地服务器地址
      method:"GET",
        header: { 
          // "Content-Type": "application/json" //GET方式
           "Content-Type": "application/x-www-form-urlencoded"
        },
      success:(res)=>{ //res就是接收后台返回的数据
        console.log(res.data);  
      // console.log(res.data.data.showapi_res_body.name); 
      if(res.data.data.showapi_fee_num==1){
        var _this = this;
        _this.setData({
          approval1: res.data.data.showapi_res_body.approval,
          consideration1:res.data.data.showapi_res_body.consideration,
          dosage1:res.data.data.showapi_res_body.dosage,
          img1:res.data.data.showapi_res_body.img,
          company:res.data.data.showapi_res_body.manuName,
          name1:res.data.data.showapi_res_body.name,
          note1:res.data.data.showapi_res_body.note,
          other1:res.data.data.showapi_res_body.other,
          purpose1:res.data.data.showapi_res_body.purpose,
         trademark1:res.data.data.showapi_res_body.trademark,
         spec1:res.data.data.showapi_res_body.spec,
         taboo1:res.data.data.showapi_res_body.taboo,
         });
      }else{
        wx.showToast({
          title: '不是13位条形码',
          icon:'error',
          duration: 3000
        })
      }

      },
      fail:function(res){
        console.log("--------fail--------");
      }
    })

  },
  method:{
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