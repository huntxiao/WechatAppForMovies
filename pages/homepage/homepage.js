// pages/me/me.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movdata1: {},//近期上映电影数据
    movdata2: {},//即将上映电影数据
  },
  recentmore: function () {
    
    wx.navigateTo({
      url: '../recentmore/recentmore'
    })
  },
  comingmore: function () {
    let This=this

    wx.navigateTo({
      url: '../comingmore/comingmore'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movdata1 = require('../../common/recentmovies.js')
    this.setData({
      movdata1: movdata1
    })
    var movdata2 = require('../../common/comingmovies.js')
    this.setData({
      movdata2: movdata2
    })
    // let This = this
    // wx.request({
    //   url: app.globalData.url+'hot', //请求近期上映电影接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log('服务器返回的近期上映电影数据')
    //     console.log(res.data)
    //     This.setData({
    //       movdata1: res.data
    //     })
    //   }
    // })
    // wx.request({
    //   url: app.globalData.url+'coming', //请求近期上映电影接口地址
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log('服务器返回的即将上映电影数据')
    //     console.log(res.data)
    //     This.setData({
    //       movdata2: res.data
    //     })
    //   }
    // })
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