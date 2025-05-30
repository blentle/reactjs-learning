# 一、ES6的简单语法

## 兼容性

+ ES6诞生2015年，也叫ES2015
+ IE10+   Chrome    Firefox     移动端    NodeJs

## 解决方案

如何兼容低版本的不支持ES6的设备如 IE9

+ 编译   提前编译

+ 转换   在线转换    如babel= brower.js=jsx

  ```javascript
  <script src="path/brower.js"></script>
  <script type="text/babel"></script>
  ```

## 新特性

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


# 二、ReactJS

## 简介
+ facebook 2013年推出
+ 官网 https://reactjs.org
+ version > 16 的版本代号叫 React Fiber

## 上手
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

## 组件化
在react里,组件是一个树形结构, 组件可以向下传递数据, 可以传普通的参数,也可以传递方法. 子组件通过this.props来接收参数.
向下传递方法(函数)参数时,要记得this绑定.

### 1、JSX
+ jsx 使用自定义的组件,必须是大写开头

### 2、传参
+ 父组件向子组件传参, 子组件 使用 this.props.参数名来接收
+ 子组件向父组件传参: 父组件向子组件传一个函数参数,如 <App handle=函数名/>,子组件调用它传参
+ 单向数据流: 子组件接收到父组件的数据后, 只能使用,不能改变其值,因为从父组件传过的值是 read-only
+ 复杂传值: react 只是一个视图层框架,对于复杂的传值,如传原离当前节点的节点(对于一棵树来说),react做不了,或者说特别复杂,需要数据框架,如redux

## 高级特性

### 1、调试工具
+ chrome浏览器插件 React Developer Tools  该插件不止能调试,还可以展示哪些网站是react开发.

### 2、PropTypes & DefaultProps
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

### 3、数据驱动的React背后的故事 Props, State和 render函数
+ 当组件的state和props发生变化时, render函数会重新执行, 数据包含 state 和 props
+ 当父组件的render函数运行时,所有的子组件render会自动运行.
+ setState是一个异步函数

### 4、React中的虚拟DOM
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

### 5、React中的ref的使用和同步setState
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

### 6、React中组件的生命周期函数
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

## Redux

### 1、redux的工作流程
![Redux Flow](./resources/Redux-Flow.png)

官网给出的定义:
```shell script
Redux is a pattern and library for managing and updating application state, 
using events called "actions". It serves as a centralized store for state 
that needs to be used across your entire application, with rules ensuring 
that the state can only be updated in a predictable fashion.
```
个人理解它是一个数据管理中心,使用一个叫actions的事件来更新state, 并保存state数据供整个应用的各大部分使用, 正如:
```shellscript
Redux helps you manage "global" state - state that is needed across many 
parts of your application.
```

### 2、初试ant-design
切换到工程根目录执行:
```javascript
yarn add antd
```
使用ant-design的组件(参考官网)
```javascript
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';  
```
添加组件
```javascript
     render() {
             return (
                 <div style={{marginLeft:'10px', marginTop:'10px'}}>
                     <div><Input placeholder="todo list" style={{width: '300px', marginRight: '10px'}}/><Button type='primary'>搜索</Button></div>
                     <List
                         style = {{marginTop:'10px', width:'300px'}}
                         size="small"
                         bordered
                         dataSource={data}
                         renderItem={item => (
                             <List.Item>
                                 {item}
                             </List.Item>
                         )}
                     />
                 </div>
     
             );
         }
```
效果如下:
#### ![avatar](./resources/xiaoguo.png)

### 3、初试Redux
> 调试工具: Chrome插件 redux-devTools

和ant-design一样, 使用redux,必须先安装redux,切换到工程根目录执行:
```javascript
yarn add redux
```
step by step的创建 上面的工作流程图中的术语部分
+ 创建store, redux提供createStore(reducer)方法生成一个store, 创建store需要传入reducer, 
+ 创建reducer, 其实是一个辅助函数,如官网所说是一个事件监听器, 但不允许修改原来的数据, 需要计算出新的state数据, 如: (state, action) => {return state},
state 很好理解, 就是之前react中的数据的state, action可以理解成事件类型,用于区分不同的事件.
```shell script
A reducer is a function that receives the current state and an action object, 
decides how to update the state if necessary, and returns the new state: 
(state, action) => newState. You can think of a reducer as an event listener 
which handles events based on the received action (event) type.

Reducers must always follow some specific rules:
They should only calculate the new state value based on the state and action arguments
They are not allowed to modify the existing state. Instead, they must make immutable updates, 
by copying the existing state and making changes to the copied values.
They must not do any asynchronous logic, calculate random values, or cause other "side effects"
```
+ 创建action, 其实是创建监听事件如onChange,给一个input绑定一个onChange事件(注意在构造方法中改变this指向).
```javascript
handleInputChange(event) {
    //修改store中的数据
    const action = {
        type:'change-input-v',
        value: event.target.value
    }
    store.dispatch(action);
}
<Input onChange={this.handleInputChange}
    
```
事件发生了,需要调用store.dispatch(action)告诉事件监听者,也就是reducer去执行相应的事件处理，再把处理后的数据给store,让其store更新(自动完成)
而此时的reducer函数变成:
```javascript
const defaultState = {
    inputData: '',
    dataList:['Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.']
}

export default (state = defaultState, action) => {
    if(action.type === 'change-input-v') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputData = action.value;
        //返回修改好的state 给 store, 由store来修改, reducer并不修改 store的数据
        return newState;
    }
    return state;
}
```
最后 store更新数据,让其响应页面
+ store 如何更新数据
需要在组件的构造方法中调用store.subscribe(函数) 来刷新数据(重新获取一下store中的数据并更新给组件的state)
```javascript
//构造函数中
store.subscribe(this.handleStoreChange);

handleStoreChange() {
    //重新取一次store中的数据
    this.setState(store.getState());
}
```
> action 可放到actionCreators文件统一创建导出, reducer 必须是一个纯函数(给定一个固定的输入，必定会有固定的输出)

### 4、组件拆分
> UI组件和容器组件

渲染页面的html(JSX)单独拆分成一个组件, 在容器组建中引入.原来的UI组件可以变成无状态组件(因为只有一个render函数)
```javascript
import React from 'react';
import {Button, Input, List} from "antd";
const TodoListUI = (props) => {
    return (
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
            <div>
                <Input onChange={props.handleInputChange} placeholder="todo list"
                       style={{width: '300px', marginRight: '10px'}} value={props.inputData}/>
                <Button type='primary' onClick={props.handleTaskAdd}>添加任务</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                size="large"
                bordered
                dataSource={props.dataList}
                renderItem={(item) => (
                    <List.Item onClick= {(index)=> {props.handleDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );
}
export default TodoListUI;
```

### 5、发送异步请求获取数据
> 使用axios 发送异步请求获取数据 (yarn add axios)

在react组件的生命周期函数 componentDidMount 里获取数据
```javascript
import axios from 'axios';
componentDidMount() {
    //使用charles模拟
    axios.get("./list/data").then((result)=> {
        //返回与 defaultState 里的dataList一样的结构
        const d = result.data;
        const action = getAjaxInitDataAction(d);
        store.dispatch(action);
    });
}
```
### 6、初识Redux-Thunk 
> 使用axios 发送异步请求获取数据 (yarn add redux-thunk) [Redux-Thunk的github](https://github.com/reduxjs/redux-thunk)

#### Redux-Thunk 是一个中间件, 中间指的是: action 与store中间.
使用redux-thunk后, store.dispatch(action), 原来是对象的action 现在可以是函数了.如官网:
```shell script
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. 
Middleware extends the store's abilities, and lets you write async logic that interacts with the store.
    Thunks are the recommended middleware for basic Redux side effects logic, 
including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.
```
示例如下:
```javascript
export const getTodoList = () => {
    return (dispatch)=> {
        //使用charles模拟
        axios.get("./list/data").then((result)=> {
            //返回与 defaultState 里的dataList一样的结构
            const d = result.data;
            const action = getAjaxInitDataAction(d);
            dispatch(action);
        });
    }
}
```
可以这样使用了:
```javascript
//初始化list数据
componentDidMount() {
   const action = getTodoList();
   store.dispatch(action);
}
```
### 7、初识Redux-Saga
> 安装 yarn add redux-saga [Redux-Saga的github](https://github.com/redux-saga/redux-saga)

官网定义如下
```shell script
redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier
to manage, more efficient to execute, easy to test, and better at handling failures.

    The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects. redux-saga is a redux middleware, 
which means this thread can be started, paused and cancelled from the main application with normal redux actions, it has access to the full redux application
state and it can dispatch redux actions as well.

    It uses an ES6 feature called Generators to make those asynchronous flows easy to read, write and test. (if you're not familiar with them here are some introductory links) By doing so, 
these asynchronous flows look like your standard synchronous JavaScript code. (kind of like async/await, but generators have a few more awesome features we need)
    
    You might've used redux-thunk before to handle your data fetching. Contrary to redux thunk, you don't end up in callback hell, you can test your asynchronous
flows easily and your actions stay pure.
```
#### generator函数的复习

### 6、初识React-Redux

#### 使用步骤
a. 首先使用 <Provider> 组件包装要渲染的组件
```javascript
    import { Provider } from "react-redux";
    const App = (
        <Provider>
            <TodoList/>
        </Provider>
    );
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
```
b. 引入store,并使用属性的方式添加到被包裹的元素的<Provider>组件上,使得被包裹的组件能用属性的方式使用store
```javascript
    import store from "./store";
    const App = (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    );
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        document.getElementById('root')
    );
```
c. 使用connect函数在组件(TodoList)里连接组件
原来的
```javascript
    export default TodoList;
```
变成
```javascript
    import { connect } from "react-redux";
    export default connect(null,null)(TodoList);
```
此时 TodoList即可连接store

d. mapStateToProps
定义 mapStateToProps 对象传给 connect函数, 让组件能使用props的方式获取state里的数据
```javascript
    const mapStateToProps = (state) => {
        return {
            inputData: state.inputData
        }
    }
    export default connect(mapStateToProps,null)(TodoList);
```
组件就可以使用props方式获取inputData
```javascript
    render() {
        return <TodoList
            inputValue = {this.props.inputData}
        />
    }
```
e. mapDispatchToProps
mapDispatchToProps函数接收dispach,使得各种事件可以直接使用this.props的方式调用定义在这里的函数
```javascript
    const mapDispatchToProps = (dispatch) => {
        return {
            //输入框数据改变,展示到输入框
            handleInputChange(event) {
                //修改store中的数据
                const action = getInputChangeAction(event.target.value);
                dispatch(action);
            }
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```
调用的时候可以直接这样写:
```javascript
    <Input onChange={this.props.handleInputChange}  value={this.props.inputData}/>
```
#### Provider组件
作用: 连接store 使的被它包裹的所有组件都能使用store
#### connect函数
作用: 连接store 使的组件可以以props 的方式使用state, dispatch. 可以不在使用 subscribe的方式来监听数据的变化了.

### 7、新版本中重大变革Hooks
> 16.8版本后, react引入了hooks, 使得函数组件也可以使用state和生命周期函数
> 16.8、17、18及现在的19版本更新不大

#### 7.1、useState
> useState是一个hook函数, 用于在函数组件中使用state
```javascript
    import React, { useState } from 'react';
    const [state, setState] = useState(initialState);

```
定义比原来的组件由类组件编程函数组件
```javascript
const App : React.FC = () => {
    //这个就是useState hook, 
    const [inputData, setInputData] = useState('');
}

```

#### 7.2、useEffect





## 工程篇
### 1. 样式隔离模块 styled-components
> 为避免全局污染, 使用此模块处理.各模块使用自己独立的样式, 使用reset.css 统一所有pc样式,避免某些默认值导致在不同环境下的样式不统一

安装模块
```shell script
    yarn add styled-components
```

### 2. immutable模块

安装模块
```shell script
    yarn add immutable
```















 











