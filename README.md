## 一、ES6简介和简单语法

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


## 二、ReactJs

### 简介
+ facebook 2013年推出
+ 官网 https://reactjs.org
+ version > 16 的版本代号叫 React Fiber

### 上手
1、使用官方推荐的脚手架工具, 创建一个工程 react-01; 切换到任意目录,执行

```shell script
    npx create-react-app react-01
```
等待片刻出现:
```shell script
    npx create-react-app react-01
    npx: installed 67 in 14.782s
    
    Creating a new React app in E:\react-project\reactjs-learning\react-01.
    
    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts with cra-template...
    
    yarn add v1.9.4
    [1/4] Resolving packages...
    [2/4] Fetching packages...
    info There appears to be trouble with your network connection. Retrying...
    [########----------------------------------------------------------------------------------------------------] 114/1453
```
2、等待上面执行完, 切换到刚才创建的工程目录, 运行
```shell script
    cd react-01
    yarn start 
```
3、启动完成会出现
```shell script
   Starting the development server...
   Compiled successfully!
   
   You can now view react-01 in the browser.
   
     Local:            http://localhost:3000
     On Your Network:  http://10.78.0.22:3000
   
   Note that the development build is not optimized.
   To create a production build, use yarn build.
```
然后打开浏览器就会看到页面

### 组件化

#### 1、JSX
+ jsx 使用自定义的组件,必须是大写开头

#### 2、传参
+ 父组件向子组件传参, 子组件 使用 this.props.参数名来接收
+ 父组件也可以向子组件传一个函数参数,如 <App handle=函数名/>




