// pages/main/main.js
Page({
  gotodisease:function(){
    var index="disease";
    wx.navigateTo({
        url: '../disease/disease?indexs='+index,
    })
      },
      gotozhongyaocai:function(){
        var index="zhongyaocai";
        wx.navigateTo({
            url: '../disease/disease?indexs='+index,
        })
          },        
          gotoprescriptions:function(){
            var index="prescriptions";
            wx.navigateTo({
                url: '../disease/disease?indexs='+index,
            })
              },    
        gotodrug:function(){
                var index="drug";
                wx.navigateTo({
                    url: '../disease/disease?indexs='+index,
                })
                  },  
          gotodiet:function(){
                    var index="diet";
                    wx.navigateTo({
                        url: '../disease/disease?indexs='+index,
                    })
                      },  
           gotoxuewei:function(){
                        var index="xuewei";
                        wx.navigateTo({
                            url: '../disease/disease?indexs='+index,
                        })
                          }, 
             gotohospital:function(){
                            var index="hospital";
                            wx.navigateTo({
                                url: '../disease/disease?indexs='+index,
                            })
                              }, 
        gototerminology:function(){
                                var index="terminology";
                                wx.navigateTo({
                                    url: '../disease/disease?indexs='+index,
                                })
                                  },    
                  gotosymptom:function(){
                                    var index="symptom";
                                    wx.navigateTo({
                                        url: '../disease/disease?indexs='+index,
                                    })
                                      },                            
                knowledgebtn:function(){
                  wx.navigateTo({
                      url: '../knowledge/knowledge',
                  })
                    },
                    searchkey:function(){
                      wx.navigateTo({
                        url: '../search2/search2',
                    })  
                    },
  data:{
    show:"",
    addName: "",
    input1:"",
  },
   
    /**扫码 */

 
})