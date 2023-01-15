// pages/priceresult/priceresult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    name:"",
    description:"",
    j:0,
    l:"",
    array:[],
    len:0,
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    var getid=options.id;
    this.setData({
       id:getid,
     }); 
     console.log("得到的id："+getid);
    wx.request({

      url: 'https://nick.cab/api/drug/getyaodian/'+getid, //本地服务器地址
     //   url: 'http://nick.cab/api/search/get/'+getkey+'/'+page+'/'+num, //本地服务器地址
     //   http://nick.cab/api/drug/get/
      method:"GET",
        header: { 
          // "Content-Type": "application/json" //GET方式
           "Content-Type": "application/x-www-form-urlencoded"
        },
      success:(res)=>{ //res就是接收后台返回的数据
        var len=res.data.length
       // console.log("len:"+len);  
        console.log("输出结果",res.data);  
      this.setData({
        array:res.data,
        len:res.data.length,
      })
        var _this = this;
     //   console.log(res.data[x])
        //console.log(res.data[x].date)
      },
      fail:function(res){
        console.log("--------fail--------");
      }
     })
    

                  
  },
})