import React, {Component} from 'react';
//引入antdesign的样式
import 'antd/dist/antd.css';
//因为使用了input组件,这里需要引入(参考官网)
import store from './store';
import { getInputChangeAction, getInputAddAction,  getInputDeleteAction, getAjaxInitDataAction } from './store/actionCreaors';
import TodoListUI from './TodoListUI';
import axios from 'axios';
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return <TodoListUI
            inputData = {this.state.inputData}
            handleInputChange={this.handleInputChange}
            handleTaskAdd={this.handleTaskAdd}
            handleDelete = {this.handleDelete}
            dataList = {this.state.dataList}
        />
    }


    componentDidMount() {
        //使用charles模拟
        axios.get("./list/data").then((result)=> {
            //返回与 defaultState 里的dataList一样的结构
            const d = result.data;
            const action = getAjaxInitDataAction(d);
            store.dispatch(action);
        });
    }

    handleStoreChange() {
        //重新取一次store中的数据
        this.setState(store.getState());
    }

    //输入框数据改变,展示到输入框
    handleInputChange(event) {
        //修改store中的数据
        const action = getInputChangeAction(event.target.value);
        store.dispatch(action);
    }

    //点击添加事件
    handleTaskAdd() {
        const action = getInputAddAction()
        store.dispatch(action);
    }

    handleDelete(index) {
        const action = getInputDeleteAction(index)
        store.dispatch(action);
    }
}

export default TodoList;