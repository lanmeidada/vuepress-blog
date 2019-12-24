# js消除字符串空白字符
***空白字符指空格、制表符、换行符***

### replace正则匹配方法
```javascript
let str = ' 字 符 串 ';
// 消除字符串包含的所有空白字符
str = str.replace(/\s*/g,"");
// 消除字符串两头的空白字符
str = str.replace(/^\s*|\s*$/g,"");
// 消除字符串右边的空白字符
str = str.replace(/^\s*/,"");
// 消除字符串左边的空白字符
str = str.replace(/(\s*$)/g,"");
```

### str.trim()方法
>trim()方法是用来删除字符串两端的空白字符并返回，trim方法并不影响原来的字符串本身，返回一个新字符串，字符串中间的空白字符都会忽略掉。
```javascript
let str = ' 字 符 串 ';
// 消除字符串右边空白字符
let strRight = str.trimRight();
// 消除字符串左边空白字符
let strLeft = str.trimLeft();
```

### JQ的$.trim(str)方法
>$.trim()函数会移除字符串左右两侧的所有空白字符，字符串中间的空白字符都会忽略掉。
```javascript
let str = " 字 符 串 ";
let strSider = $.trim(str);
```