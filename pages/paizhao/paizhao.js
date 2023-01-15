// pages/paizhao/paizhao.js
Page({
  data: {
    imgs: [],
    count: 3,
    pic:'',
    array:[],
    arrayres:[],
    name1:'',
    name2:'',
    name3:'',
    bel1:'',
    bel2:'',
    bel3:'',
    test:'1',
  },
  goto:function(e){
   console.log(e.currentTarget.dataset.n1);
   var key=e.currentTarget.dataset.n1;
   wx.navigateTo({
    url: '../searchlist/searchlist?keyword='+key
  })
  },
  bindUpload: function (e) {
    switch (this.data.imgs.length) {
      case 0:
        this.data.count = 3
        break
      case 1:
        this.data.count = 2
        break
      case 2:
        this.data.count = 1
        break
    }
    var that = this
    wx.chooseMedia({
      count: that.data.count, // 默认3
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFiles[0].tempFilePath);

        that.setData({
          pic:res.tempFiles[0].tempFilePath,

        })
        var tempFilePaths = res.tempFiles[0].tempFilePath
          wx.uploadFile({
            
            url: 'https://nick.cab/identify',
            filePath:res.tempFiles[0].tempFilePath,
            name: "file",
            header: {
              "content-type": "multipart/form-data"
            },
            
            success: function (res) {
              wx.showToast({
                title: "上传中",
                icon:"loading",
                duration: 5000
              })
                      //console.log(res);
                       console.log(res.data);
                wx.showToast({
                  title: "上传成功",
                  icon: "none",
                  duration: 1500
                })
                if(res.data=='"'+"没有收录该中药材"+'"'){
                  console.log("use");
                         that.setData({
                           test:10,
                         })
                }else{
                  that.data.imgs.push(JSON.parse(res.data).data)
                  that.setData({
                    imgs: that.data.imgs,
                    array:res.data,
             
                  })
                }
      

            },
            fail: function (err) {
              wx.showToast({
                title: "上传失败",
                icon: "none",
                duration: 2000
              })
            },
            complete: function (res) {
             // console.log(res.data)
              var data=res.data;
            //  console.log(data.split(','));
              arrayres=data.split(',');
              test1=arrayres[0].slice(2,arrayres[0].length-1);
              test2=arrayres[1].slice(1,arrayres[1].length-1);
              test3=arrayres[2].slice(1,arrayres[2].length-2);
              // console.log(test1);
              // console.log(test2);
              // console.log(test3);
              test11=test1.split(' ');
              console.log(test11[0]);
              console.log(test11[1]);
              test22=test2.split(' ');
              console.log(test22[0]);
              console.log(test22[1]);
              test33=test3.split(' ');
              console.log(test33[0]);
              console.log(test33[1]);
              // belief1=arrayres[0].slice(2,18);
              // name1=arrayres[0].slice(20,arrayres[0].length-1);
              // console.log(belief1);
              // console.log(name1);
              // belief2=arrayres[1].slice(1,17);
              // name2=arrayres[1].slice(19,arrayres[1].length-1);
              // console.log(belief2);
              // console.log(name2);
              // belief3=arrayres[2].slice(1,17);
              // name3=arrayres[2].slice(19,arrayres[2].length-2);
              // console.log(belief3);
              // console.log(name3);
              that.setData({
                bel1:test11[0],
                bel2:test22[0],
                bel3:test33[0],   
                name1:test11[1],      
                name2:test22[1],    
                name3:test33[1],      
              })
            }
          })
      }
    })
  },
  // 删除图片
  deleteImg: function (e) {
    var that = this
    wx.showModal({
      title: "提示",
      content: "是否删除",
      success: function (res) {
        if (res.confirm) {
          that.setData({
            pic: '',
            name1:'',
            name2:'',
            name3:'',
            bel1:'',
            bel2:'',
            bel3:'',
            test:'1',
          })
        } else if (res.cancel) {
          console.log("用户点击取消")
        }
      }
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

})