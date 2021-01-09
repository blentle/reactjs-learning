import React, {Component} from 'react';
//引入antdesign的样式
import 'antd/dist/antd.css';
//因为使用了input组件,这里需要引入(参考官网)
import {
    getInputChangeAction,
    getInputAddAction,
    getInputDeleteAction
} from './store/actionCreaors';
import { connect } from "react-redux";
import {Button, Input, List} from "antd";
import store from "./store";
class TodoList extends Component {

    render() {
        return (<div style={{marginLeft: '10px', marginTop: '10px'}}>
            <div>
                <Input onChange={this.props.handleInputChange} placeholder="todo list"
                       style={{width: '300px', marginRight: '10px'}} value={this.props.inputData}/>
                <Button type='primary' onClick={this.props.handleTaskAdd}>添加任务</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                size="large"
                bordered
                dataSource={this.props.dataList}
                renderItem={(item,index) => (
                    <List.Item onClick= {()=> {this.props.handleDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {
        inputData: state.inputData,
        dataList: state.dataList
    }
}

//store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        //输入框数据改变,展示到输入框
        handleInputChange(event) {
            //修改store中的数据
            const action = getInputChangeAction(event.target.value);
            dispatch(action);
        },
        //点击添加事件
        handleTaskAdd() {
            const action = getInputAddAction()
            store.dispatch(action);
        },
        handleDelete(index) {
            const action = getInputDeleteAction(index)
            store.dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);