## ES6简介和简单语法

### 兼容性

+ ES6诞生2015年，也叫ES2015
+ IE10+   Chrome    Firefox     移动端    NodeJs

### 解决方案

如何兼容低版本的不支持ES6的设备如 IE9

+ 编译   提前编译

+ 转换   在线转换    如babel= brower.js=jsx

  ```javascript
  <script src="path/brower.js"></script>
  <script type="text/babel"></script>
  ```

### 新特性

+ 变量

  let

  const

+ 函数   

  1. 开始支持...可变参数    2. 默认参数值

+ 数组    let [a,b,c] = [1,2,3]  console.log(a,b,c)      json也可以      解构赋值(左右结构必须一样,且右边必须是合法的语法 ，声明和初始化必须一起办了)

  map, reduce,filter,foreach  与java,scala一模一样的功能

+ 字符串  

  1.多了连个新方法: startsWith    endsWith

  2.字符串模板         `${}` 反单引号

+ 面向对象   

  1.class关键字     

  2.constructor

  3.新的继承的语法     A extends P    constructor里   super   替代原来的 this.call()

+ Promise

  1.异步请求    Promise.all([ajax,ajax]).then(results => {}, error => {})

  2.可以消除异步操作

  3.let p = new Promise(function(resolve, reject) {

  })

  p.then(function() {“调用成功”}, function() {"调用失败"});

  4.高版本的jQuery  ajax方法现在也返回Promise对象  

  5.Promise.race([])   与all方法一样

+ Generator

  1.其实就是函数,   与yield配合使用

  2.generator函数中间能停

  ```javascript
  function *show(){}   或者function* show() {}
  let genObj = show();
  genObj.next();
  genObj.next();
  ```

+ 模块化
