
Page({

  /**
   * 页面的初始数据
   */
  change:function(e){
    let data=e.currentTarget.dataset.hi;
    let len=e.currentTarget.dataset.hi2;
    var key=e.currentTarget.dataset.hi3;
    page1=this.data.page2;
    num1=this.data.num2; 
    var test= Number(page1)+Number(10);
//console.log("array2:",data);
//console.log("len:"+len);
//console.log("test:"+test);
//console.log("all:",e);
   wx.redirectTo({
    url: '../searchlist2/searchlist2?pagex='+test+'&numx='+num1+'&tokey='+key,
   })
  },
  detail:function(e){
    var index=e.currentTarget.dataset.hi5;
    var id=e.currentTarget.dataset.hi4;
    console.log(e);
    console.log(e.currentTarget.dataset.hi4);
    console.log(id);
        wx.navigateTo({
      url: '../details/details?idx='+id+'&indexs='+index,
    })
  },
  goback:function(e){
    let data=e.currentTarget.dataset.hi;
    let len=e.currentTarget.dataset.hi2;
    var key=e.currentTarget.dataset.hi3;
    page1=this.data.page2;
    num1=this.data.num2;
    var test= Number(page1)-Number(10);
   // console.log("传给3的page:"+page1+"传给3的num:"+num1);
//console.log("array2:",data);
//console.log("len:"+len);
//console.log("all:",e);
if(test>0){
  wx.redirectTo({
    url: '../searchlist2/searchlist2?pagex='+test+'&numx='+num1+'&tokey='+key,
   })
}
else{
  wx.redirectTo({
    url: '../searchlist2/searchlist2?pagex='+test+'&numx='+num1+'&tokey='+key,
   })
}
  },
  data: {
    page2:0,
    num2:10,
    page1:0,
    num1:0,
  array:[],
  len:0,
  key:'',
  id:'',
  index:'',
},
method:{

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("第三页面");
    var page=this.options.pagex;
    var num=this.options.numx;
    var getkey=this.options.tokey;
    //加上this来调用data中数据
    console.log("key:"+getkey);
    console.log("page:"+page);
    console.log("num:"+num);
    this.setData({
      key:getkey,
    })
    wx.request({
    url: 'https://nick.cab/api/search/get/'+getkey+'/'+page+'/'+num, //本地服务器地址
    //已经弄好了随机抽出,num代表一次抽出的数量
 method:"GET",
   header: { 
     // "Content-Type": "application/json" //GET方式
      "Content-Type": "application/x-www-form-urlencoded"
   },
 success:(res)=>{ //res就是接收后台返回的数据
   console.log(res.data);  
this.setData({
  id:res.data.data.id,
  index:res.data.data.index,
  array:res.data.data,
  len:res.data.data.length,
  page2:page,
})
 },
 fail:function(res){
   console.log("--------fail--------");
 }
})
  },
})