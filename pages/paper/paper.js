// pages/paper/paper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviedata:{},
  
  },
  gotosee:function(){
    wx.navigateTo({
      url: '../wantosee/wantosee',
    })
  },
  gosaw:function(){
    wx.navigateTo({
      url: '../saw/saw',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var This = this;
   
    console.log(options)
    var url = "http://192.168.3.107:8080/hotxq?id=" + options.id;//192.168.3.141 本地服务器
    wx.request({
      url: url,
      header: {},
      method: 'GET',
      dataType: 'json',
    
      success: function(res) {
        // var movdata = require('../../common/' + options.id+'.js')
        var movdata=res.data
        console.log(res)
        if (movdata.alt_title){
          movdata.alt_title = movdata.alt_title.split("/")[0]
        }else{
          movdata.alt_title = movdata.title
        }
        
        movdata.director = movdata.directors[0]
        movdata.cast=""
        for (var i = 0; i < movdata.casts.length;i++){
          movdata.cast += movdata.casts[i].name+" / "
          if(i==2){
            break
          }
        } 
        console.log(movdata)
        This.setData({
          moviedata: movdata
        })
        console.log(res)
   
      },
      fail: function(res) {},
      complete: function(res) {},

    });
    wx.setNavigationBarTitle({
      title: ""
    });
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})