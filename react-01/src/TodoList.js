import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";
import './input.css'

class TodoList extends Component {
    //构造方法首先被调用
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            dataList: []
        }
    }

    //数据变了就给input框赋值
    handleInput(event) {
        //给 state的属性赋值, 必须使用setState方法,直接给 this.state.data 赋值,控制台会给警告:
        //Do not mutate state directly. Use setState()  react/no-direct-mutation-state
        this.setState({data: event.target.value});

    }

    //点击提交按钮,应该直接创建li
    handleSubmit(event) {
        //创建完成给ul添加li后,还要清空input框
        const d = [...this.state.dataList, this.state.data];
        this.setState(
            {
                dataList: d,
                data: ''
            }
        );
    }

    handleDelete(index) {
        //先拷贝一遍
        const list = [...this.state.dataList];
        list.splice(index, 1);
        this.setState({dataList: list});
    }

    getTodoItem() {
        return this.state.dataList.map((item, index) => {
            return (
                <li key={index}><TodoItem  con={item} index={index} deleteItem={this.handleDelete.bind(this)}/></li>
            )
        });

    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="content">输入内容</label>
                    <input id="content" value={this.state.data} onChange={this.handleInput.bind(this)}/>
                    <button onClick={this.handleSubmit.bind(this)}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;