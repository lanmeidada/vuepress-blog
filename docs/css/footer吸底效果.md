# footer吸底效果
## html设置
```html
<!-- wrapper是包裹content和footer的父容器 --></div>
<div class="wrapper">
   <div class="content">
     <ul>
       <!-- 页面主体内容区域 -->
       <li>1.这是内容，这是内容……</li>
       <li>2.这是内容，这是内容……</li>
       <li>3.这是内容，这是内容……</li>
       <li>4.这是内容，这是内容……</li>
       <li>5.这是内容，这是内容……</li>
       <li>6.这是内容，这是内容……</li>
       <li>7.这是内容，这是内容……</li>
       <li>8.这是内容，这是内容……</li>
       <li>9.这是内容，这是内容……</li>
      </ul>
   </div>
  <div class="footer">
    <!-- 需要做到吸底的区域 -->
    底部按钮
  </div>
 </div>
```
> 说明：以下方案的实现都基于这段html结构

## 方案1：使用position对需固定元素定位
### 原理分析
- 我们希望wrapper的外容器（包括html、body）的高度充满整个屏幕，即设置高度height:100%，且设置wrapper的min-height:100%，这里设置的是min-height而不是height，是为了保证整个wrapper的最小高度可撑开至全屏，即使内容不足以充满屏幕时，wrapper的高度仍是全屏的高度；当wrapper的高度随着content的高度变化而增大，它的高度是可以大于可视窗口的高度。
- 设置wrapper的padding-bottom值大于等于footer的height值，即可保证content中内容不会被底部的footer区域所覆盖。
- 设置footer定位方式，这里要区别两种效果：若是希望footer固定于页面底部，此时设置wrapper的position:relative，相应地，为footer设置position:absolute，使footer相对于wrapper绝对定位，这样一来，无论内容的多少，footer依然可以固定在页面的最底部；而希望固定于可视窗口底部，为footer设置position:fixed，并设置相应定位即可。
- 设置height为固定高度值。

#### 适用场景
所使用的属性在各浏览器中都实现得很成熟，相比第二、三种方案，较为推荐该方法。 不适用于以下的场景：定位(fixed)的区域中有文本框，因为在ios系统中，文本框调用输入法时，定位的区域就会往上弹，离底部有段距离。
> 固定于页面底部

```css
html,body {
  height: 100%;
}
.wrapper {
  position: relative; /*关键*/
  box-sizing: border-box;
  min-height: 100%; /*关键*/
  padding-bottom: 100px; /*该值设置大于等于按钮的高度*/
}
ul {
 list-style: none;
}
li {
 list-style: none;
 height: 100px;
 background: lightblue;
}
     
.footer {
  position: absolute; /*关键*/
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px; /*设置固定高度*/
  background: orange;
}

```
> 固定于可视窗口底部

```css
html,
body {
  height: 100%;
}
  
.wrapper {
  box-sizing: border-box;
  min-height: 100%; /*关键*/
  padding-bottom: 100px;   /*该值设置大于等于按钮的高度*/
}
ul {
  list-style: none;
}
li {
  list-style: none;
  height: 100px;
  background: lightblue;
}
.footer {
  position: fixed; /*使按钮固定于可视窗口的底部*/
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;  /*设置固定高度*/
  background: orange;
}

```

## 方案2：使用flexbox布局实现
### 适用场景
flex布局结构简单，代码精简。但flex有着兼容性问题，在使用这种方式布局时需要注意。 在实现固定于页面底部的效果时，采用这种弹性布局的思想，底部固定区域的高度可灵活设置，无需定义footer的高度，这也是这种方式的优点。
> 固定于页面底部
### 原理分析
- 设置wrapper的min-height:100%，这里设置的是min-height而非height，是想使整个wrapper的最小高度撑开至全屏，即内容不足以充满屏幕时，wrapper的高度仍是全屏；当wrapper的高度随着content的高度增大而变化，它的高度是可以大于可视窗口高度，而不一直都等于屏幕的高度。
- 设置wrapper的布局方式为flex，且content的flex:1，使content的高度始终为wrapper的减去底部footer的高度。
### css设置
```css
html,
body {
  height: 100%;
}
.wrapper {
  min-height: 100%; /*关键*/
  display: flex; /*关键*/
  flex-direction: column; /*关键*/
}
.content {
  flex: 1;  /*关键*/
}
ul {
  list-style: none;
}
li {
  height: 100px;
  background: lightblue;
}
/*高度可不设置*/
.footer {
  padding: 20px;
  background: orange;
}

```

> 固定于可视窗口底部
### 原理分析
除了以上(在方案2-固定于页面底部中的分析)，还有以下需要注意的地方：
- 由于footer因设置了fixed而脱离了文档流，因此需给wrapper设置padding，该值应大于等于按钮的高度，这样才能保证footer不会覆盖content区域的内容。
- 设置footer定位方式为fixed，并设置相应定位，即可使footer固定于可视窗口的底部。
### css设置
```css
html,
body {
  height: 100%;
}
.wrapper {
  display: flex; /*关键*/
  min-height: 100%; /*关键*/
  padding-bottom: 62px; /*该值设置大于等于按钮的高度*/
  flex-direction: column; /*关键*/
}
.content {
  flex: 1  /*关键*/
}
ul {
    list-style: none;
}
li {
  list-style: none;
  height: 100px;
  background: lightblue;
}
.footer {
  position: fixed ; /*关键*/
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background: orange;
}

```

## 方案3：使用calc实现
### 适用场景
该方案不需要任何额外样式处理，代码简洁，但遗憾的是，移动端的低版本系统不兼容calc属性。
> 固定于页面底部
### 原理分析：
- wrapper设置height:100%是希望无论content内容的多少，它的高度都是屏幕的高度，如此一来，content的高度=父元素wrapper高度-底部需固定元素footer的高度，最后还需要为content加上overflow:scroll，使content中隐藏的部分也可通过滚动显示。
- content的父元素wrapper设置了height:100%，保证content的高度在计算时，100%固定等于屏幕的高度，而不会是随着content内容的高度变化的。
### css设置：
```css
html,
body,
.wrapper {
  height: 100%;
}
.content {
  height: calc(100% - 100px); /*关键：使用height，而不是min-height*/
  overflow: scroll; /*关键*/
}
ul {
  list-style: none;
}
li {
  height: 100px;
  background: lightblue;
}
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  background: orange;
}

```
