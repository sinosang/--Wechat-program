// pages/searchlist/searchlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:"",
    id:"",
    name:"",
    photoUrl:"",
    description:"",
    j:0,
    l:"",
    array:[],
    },
  /**
   * 生命周期函数--监听页面加载
   */
  goto:function(e){
    var id=e.currentTarget.dataset.hello;
    var key=e.currentTarget.dataset.hi;
console.log("input is:"+key);
    wx.navigateTo({
     url: '/pages/priceresult/priceresult?id='+id,
    })
     console.log("enough:"+id);
   // console.log(length);
  //  console.log(key);
  //  console.log(e);
  },

  onLoad:function(options) {
    var getkey=options.keyword;
    this.setData({
       keyword:getkey,
     }); 
     console.log("input:"+getkey);
    wx.request({
      
      url: 'https://nick.cab/api/drug/get/'+getkey, //本地服务器地址
     //   url: 'http://nick.cab/api/search/get/'+getkey+'/'+page+'/'+num, //本地服务器地址
     //   http://nick.cab/api/drug/get/
      method:"GET",
        header: { 
          // "Content-Type": "application/json" //GET方式
           "Content-Type": "application/x-www-form-urlencoded"
        },
      success:(res)=>{ //res就是接收后台返回的数据
        var len=res.data.data.length
        console.log("len:"+len);  
        console.log(res.data);  

      var _this = this;
       x=_this.data.j;   //通过this的方法来连接onLoad中的方法数值和data里的j实现动态变化
       x2=_this.data.j+1;
       x3=_this.data.j+2;
       x4=_this.data.j+3;
       x5=_this.data.j+4;
       x6=_this.data.j+5;
       x7=_this.data.j+6;
       x8=_this.data.j+7;
       x9=_this.data.j+8;
       x10=_this.data.j+9;
      _this.setData({
        array:res.data.data,
        id:res.data.data[x]._id,
        name:res.data.data[x].name,
        photoUrl:'http://nick.cab/'+res.data.data[x].url,
        description:res.data.data[x].dnum,
        min:res.data.data[x].minPrice,

        id2:res.data.data[x2]._id,
        name2:res.data.data[x2].name,
        photoUrl2:'http://nick.cab/'+res.data.data[x2].url,
        description2:res.data.data[x2].dnum,
        min2:res.data.data[x2].minPrice,

        id3:res.data.data[x3]._id,
        name3:res.data.data[x3].name,
        photoUrl3:'http://nick.cab/'+res.data.data[x3].url,
        description3:res.data.data[x3].dnum,
        min3:res.data.data[x3].minPrice,

        id4:res.data.data[x4]._id,
        name4:res.data.data[x4].name,
        photoUrl4:'http://nick.cab/'+res.data.data[x4].url,
        description4:res.data.data[x4].dnum,
        min4:res.data.data[x4].minPrice,

        id5:res.data.data[x5]._id,
        name5:res.data.data[x5].name,
        photoUrl5:'http://nick.cab/'+res.data.data[x5].url,
        description5:res.data.data[x5].dnum,
    min5:res.data.data[x5].minPrice,

        id6:res.data.data[x6]._id,
        name6:res.data.data[x6].name,
        photoUrl6:'http://nick.cab/'+res.data.data[x6].url,
        description6:res.data.data[x6].dnum,
        min6:res.data.data[x6].minPrice,

        id7:res.data.data[x7]._id,
        name7:res.data.data[x7].name,
        photoUrl7:'http://nick.cab/'+res.data.data[x7].url,
        description7:res.data.data[x7].dnum,
        min7:res.data.data[x7].minPrice,

        id8:res.data.data[x8]._id,
        name8:res.data.data[x8].name,
        photoUrl8:'http://nick.cab/'+res.data.data[x8].url,
        description8:res.data.data[x8].dnum,
        min8:res.data.data[x8].minPrice,

        id9:res.data.data[x9]._id,
        name9:res.data.data[x9].name,
        photoUrl9:'http://nick.cab/'+res.data.data[x9].url,
        description9:res.data.data[x9].dnum,
        min9:res.data.data[x9].minPrice,

        id10:res.data.data[x10]._id,
        name10:res.data.data[x10].name,
        photoUrl10:'http://nick.cab/'+res.data.data[x10].url,
        description10:res.data.data[x10].dnum,
        min10:res.data.data[x10].minPrice,
        l:len,
       // description:res.data.data[j].description,
          });
    
      
      },
      fail:function(res){
        console.log("--------fail--------");
      }
     })
    

                  
  },
})