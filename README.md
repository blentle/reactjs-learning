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
在react里,组件是一个树形结构, 组件可以向下传递数据, 可以传普通的参数,也可以传递方法. 子组件通过this.props来接收参数.
向下传递方法(函数)参数时,要记得this绑定.

#### 1、JSX
+ jsx 使用自定义的组件,必须是大写开头

#### 2、传参
+ 父组件向子组件传参, 子组件 使用 this.props.参数名来接收
+ 子组件向父组件传参: 父组件向子组件传一个函数参数,如 <App handle=函数名/>,子组件调用它传参
+ 单向数据流: 子组件接收到父组件的数据后, 只能使用,不能改变其值,因为从父组件传过的值是 read-only
+ 复杂传值: react 只是一个视图层框架,对于复杂的传值,如传原离当前节点的节点(对于一棵树来说),react做不了,或者说特别复杂,需要数据框架,如redux

### 高级特性

#### 1、调试工具
+ chrome浏览器插件 React Developer Tools  该插件不止能调试,还可以展示哪些网站是react开发.

#### 2、PropTypes & DefaultProps
+ PropTypes 用于 类型校验, 使用前需要导入这个模块, 每个组件都有一个propTypes属性,用于定义参数类型校验,后面可以包含非空检查,支持的类型可以查官网文档
```javascript
    import PropTypes from 'prop-types';
    //使用
    MyComponent.propTypes = {
      content: PropTypes.string.isRequired,
      index: PropTypes.number,
      handleClick: PropTypes.func
    };
```
+ DefaultProps 一看到这个名字就知道是防止属性没值,在校验时不通过. 
```javascript
    MyComponent.defaultProps = {
      content: "这是默认的值",
      index: 0,
      handleClick: handleClick
    };
    handleClick() 
    {
        //do logic
    }
```

#### 3、数据驱动的React背后的故事 Props, State和 render函数
+ 当组件的state和props发生变化时, render函数会重新执行, 数据包含 state 和 props
+ 当父组件的render函数运行时,所有的子组件render会自动运行.
+ setState是一个异步函数

#### 4、React中的虚拟DOM
+ 虚拟DOM是什么
其实就是一个 JS对象, 用它来描述真实的DOM. 如下的DOM
```javascript
   <div id="aaa"><span>hello world</span></div>
```
生成的虚拟dom如下:
```javascript
   ['div', {id: 'aaa'}, ['span', {}, 'hello word']]
```
每次数据变化时, 数据(props和state)和模板(JSX)生成一个新的虚拟DOM, 与原来的虚拟DOM比较(两个DOM对比,需要调用web application的api耗费性能,而 js 与js比较则很快)做改变,最后生成真实的DOM.
这是为什么每次数据变化时, render函数重新渲染性能相较原始DOM重新渲染性能高的多的原因.

React的createElement 偏底层的方法

+ 虚拟DOM的优点
1. 提升性能
2. 实现跨端应用 如 React Native

+ 虚拟DOM中的diff算法
当数据发生变化时,会生成新的虚拟DOM, 会与原来的虚拟DOM作对比,设计的diff算法. 组件同级比对.

#### 5、React中的ref的使用和同步setState
在jsx里元素上添加一个ref属性,将当前DOM元素赋值给一个箭头函数,箭头函数参数就是当前DOM
```javascript
    <input id="content" value={this.state.data} onChange={this.handleInput.bind(this)} ref={(inc) => {this.s = inc}}/>
```
在其他地方就可以这样使用,如下 p取到 input框的值, react 由于是数据驱动,不推荐这么写
```javascript
    const p = this.s.value
```
前面说过setState是一个异步函数,但有时需要在调用setState成功后执行某些逻辑, setState函数提供了第二个参数(一个回调函数)如:
```javascript
    this.setState({dataList: list},() => {console.log(list.size())});
```

#### 6、React中组件的生命周期函数
生命周期函数指在某一个时刻会被组件自动调用.

组件的生命过程:
Initialization => Mounting(组件第一次被挂在到页面) => Updation =》 Unmounting

Mounting的两个函数:
+ 函数ComponentWillMount: 在组件即将被挂载到页面之前被执行.
+ 函数ComponentDidMount: 在组件被挂载到页面之后被执行.

Updation的一些函数:
+ componentWillReceiveProps(特殊,需要有子组件)
+ 函数shouldComponentUpdate(返回一个boolean类型), true告诉组件更新,false不更新
+ 函数componentWillUpdate: 组件被更新之前,它会自动执行,但它在shouldComponentUpdate之后执行. 且只有在shouldComponentUpdate返回true才会执行,否则不执行
+ 接下来执行 render函数
+ componentDidUpdate

特殊的生命周期函数
+ componentWillReceiveProps 触发条件是: a.一个组件要从父组件接收参数; b.只要父组件的render函数被重新执行了;
> 如果这个组件第一次存在与父组件中,不会执行,若之前已经存在于父组件中,才会执行

Unmounting函数
+ componentWillUnmount 组件在被移除时执行,执行完成还会执行 componentDidUpdate,因为要重新渲染页面.



 











