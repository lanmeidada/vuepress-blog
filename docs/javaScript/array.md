## 1. 使用 Array.includes 来处理多重条件
```javascript
/**
 * 使用 Array.includes 来处理多重条件
 * @param fruit
 */
function filterArrayElement(fruit) {
  // 把条件提取到数组中
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
  if (redFruits.includes(fruit)) {
    console.log('red');
  }
}
```
