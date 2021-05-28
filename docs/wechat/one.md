## 判断当前页面层级
 > 扫码分享、链接分享进来的，层级是为1
  ``` javascript
  let pages = getCurrentPages();
  if (pages.length!=1){
    that.setData({
      isOnePages: true
    })
  }
  ```
## 判断**链接**进入还是**扫码**进入
  ``` javascript
  onLoad: function (options) {
    if(options.scene) { // 扫码进入
      // 需先URL解码
      let scene = decodeURIComponent(options.scene);
      // getQueryStringArgs() => 获得扫码查询字符串参数 => 声明变量来储存
      let map = app.getQueryStringArgs(scene);
    } else {
      // 直接使用 options 参数
      // ...
    }
  }
  ```
## 用户点击右上角分享
```
  onShareAppMessage: function () {
    let that = this;
    // 分享图片  that.data.staticImgMap['5'] => 取后台返回图片数组的第五个
    let imageUrl = imageTool.getOriginalImg(app.imgServer,that.data.staticImgMap['5']);
    return {
      title: '分享文案',
      path: 'pages/mine/store?oId=' + app.getOrganizationId(),
      imageUrl: imageUrl,
      success: function (res) {
        console.log('分享成功', res);
        // 转发成功
        // ...
      },
      fail: function (res) {
        // 转发失败
        // ...
      }
    }
  }
  ```
