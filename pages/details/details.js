// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
id:'',
idnex:'',
name:'',
function:'',
description:'',
photo:'',
dosage:'',
composition:'',
indications:'',
literature:'',
addition:'',
interaction:'',
precautions:'',
reactions:'',
storage:'',
traits:'',
element:'',
domain:'',
reference:'',
concept:'',
information:'',
identification:'',
efficacy:'',
application:'',
processing:'',
compatibility:'',
formula:'',
method:'',
source:'',
preservation:'',
operate:'',
},
exit:function(){
 wx.switchTab({
   url: '../main/main',
 })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var getid=options.idx;
    var getindex=options.indexs;
    this.setData({
       id:getid,
       index:getindex,
     });
     wx.request({
      url: 'https://nick.cab/api/search/get/'+getid+'/'+getindex, //本地服务器地址
   method:"GET",
     header: { 
       // "Content-Type": "application/json" //GET方式
        "Content-Type": "application/x-www-form-urlencoded"
     },
   success:(res)=>{ //res就是接收后台返回的数据
     console.log(res.data);  
    if(getindex=='disease'){
      this.setData({
        array:res.data.data,
      });
      console.log("disease");
    }if(getindex=='prescriptions'){
      this.setData({
        array:res.data.data,
      });
      console.log("prescriptions");
    }if(getindex=='zhongyaocai'){
      this.setData({
        array:res.data.data,
      });
      console.log("zhongyaocai");
    }if(getindex=='xuewei'){
      this.setData({
        array:res.data.data,
       });
      console.log("xuewei");
    }if(getindex=='drug'){
      this.setData({
        array:res.data.data,
      });
      console.log("drug");
    }if(getindex=='diet'){
      this.setData({
        array:res.data.data,
      });
      console.log("diet");
    }if(getindex=='terminology'){
      this.setData({
        array:res.data.data,
      });
      console.log("terminology");
    }if(getindex=='hospital'){
      this.setData({
        array:res.data.data,
      });
      console.log("hospital");
    }
    if(getindex=='symptom'){
      this.setData({
        array:res.data.data,
      });
      console.log("symptom");
    }
  //  console.log(res.data.data);
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