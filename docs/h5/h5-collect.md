## H5页面窗口自动调整到设备宽度，并禁止用户缩放页面
一、HTML页面结构
``` html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<!-- width    设置viewport宽度，为一个正整数，或字符串‘device-width’ -->
<!-- height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置 -->
<!-- initial-scale    默认缩放比例，为一个数字，可以带小数 -->
<!-- minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数 -->
<!-- maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数 -->
<!-- user-scalable    是否允许手动缩放 -->
```
二、JS动态判断
``` javascript
  var phoneWidth =  parseInt(window.screen.width);
  var phoneScale = phoneWidth/640;
  var ua = navigator.userAgent;
  if (/Android (\d+\.\d+)/.test(ua)){
      var version = parseFloat(RegExp.$1);
      if(version>2.3){
          document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
      }else{
          document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
      }
  } else {
      document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
```

## 空白页基本meta标签
``` html
<!-- 设置缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
<!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection"content="telephone=no, email=no" />
```

## 其他meta标签
``` html
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
```

## 移动端如何定义字体font-family
``` html
@ --------------------------------------中文字体的英文名称
@ 宋体      SimSun
@ 黑体      SimHei
@ 微信雅黑   Microsoft Yahei
@ 微软正黑体 Microsoft JhengHei
@ 新宋体    NSimSun
@ 新细明体  MingLiU
@ 细明体    MingLiU
@ 标楷体    DFKai-SB
@ 仿宋     FangSong
@ 楷体     KaiTi
@ 仿宋_GB2312  FangSong_GB2312
@ 楷体_GB2312  KaiTi_GB2312
@ 说明：中文字体多数使用宋体、雅黑，英文用Helvetica
body { font-family: Microsoft Yahei,SimSun,Helvetica; }
```

## 打电话发短信写邮件怎么实现
``` html
<!-- 一、打电话 -->
<a href="tel:0755-10086">打电话给:0755-10086</a>
<!-- 二、发短信，winphone系统无效 -->
<a href="sms:10086">发短信给: 10086</a>
<!-- 三、写邮件 -->
<!-- 注：在添加这些功能时，第一个功能以"?"开头，后面的以"&"开头 -->
<!-- 1.普通邮件 -->
<a href="mailto:863139978@qq.com">点击我发邮件</a>
<!-- 2.收件地址后添加?cc=开头，可添加抄送地址（Android存在兼容问题） -->
<a href="mailto:863139978@qq.com?cc=zhangqian0406@yeah.net">点击我发邮件</a>
<!-- 3.跟着抄送地址后，写上&bcc=,可添加密件抄送地址（Android存在兼容问题） -->
<a href="mailto:863139978@qq.com?cc=zhangqian0406@yeah.net&bcc=384900096@qq.com">点击我发邮件</a>
<!-- 4.包含多个收件人、抄送、密件抄送人，用分号(;)隔开多个邮件人的地址 -->
<a href="mailto:863139978@qq.com;384900096@qq.com">点击我发邮件</a>
<!-- 5.包含主题，用?subject= -->
<a href="mailto:863139978@qq.com?subject=邮件主题">点击我发邮件</a>
<!-- 6.包含内容，用?body=;如内容包含文本，使用%0A给文本换行 -->
<a href="mailto:863139978@qq.com?body=邮件主题内容%0A腾讯诚信%0A期待您的到来">点击我发邮件</a>
<!-- 7.内容包含链接，含http(s):等的文本自动转化为链接 -->
<a href="mailto:863139978@qq.com?body=http://www.baidu.com">点击我发邮件</a>
<!-- 8.内容包含图片（PC不支持） -->
<a href="mailto:863139978@qq.com?body=<img src='images/1.jpg' />">点击我发邮件</a>
<!-- 9.完整示例 -->
<a href="mailto:863139978@qq.com;384900096@qq.com?cc=zhangqian0406@yeah.net&bcc=993233461@qq.com&subject=[邮件主题]&body=腾讯诚邀您参与%0A%0Ahttp://www.baidu.com%0A%0A<img src='images/1.jpg' />">点击我发邮件</a>
```
## 移动端touch事件（区分webkit和winphone）
``` javaScript
/* 当用户手指放在移动设备在屏幕上滑动会触发的touch事件
// 以下支持webkit
touchstart——当手指触碰屏幕时候发生。不管当前有多少只手指
touchmove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用event的preventDefault()可以阻止默认情况的发生：阻止页面滚动
touchend——当手指离开屏幕时触发
touchcancel——系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面alert()一个提示框，此时会触发该事件，这个事件比较少用
//TouchEvent说明：
touches：屏幕上所有手指的信息
targetTouches：手指在目标区域的手指信息
changedTouches：最近一次触发该事件的手指信息
touchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，最好用于计算手指信息
//参数信息(changedTouches[0])
clientX、clientY在显示区的坐标
target：当前元素
//事件响应顺序
ontouchstart  > ontouchmove  > ontouchend > onclick
// 以下支持winphone 8
MSPointerDown——当手指触碰屏幕时候发生。不管当前有多少只手指
MSPointerMove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用css的html{-ms-touch-action: none;}可以阻止默认情况的发生：阻止页面滚动
MSPointerUp——当手指离开屏幕时触发
```
