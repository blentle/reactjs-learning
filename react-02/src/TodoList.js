import React, {Component} from 'react';
//引入antdesign的样式
import 'antd/dist/antd.css';
//因为使用了input组件,这里需要引入(参考官网)
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange() {
        //重新取一次store中的数据
        this.setState(store.getState());
    }

    //输入框数据改变,展示到输入框
    handleInputChange(event) {
        //修改store中的数据
        const action = {
            type:'change-input-v',
            value: event.target.value
        }
        store.dispatch(action);
    }

    //点击添加事件
    handleTaskAdd() {
        const action = {
            type:'add-input-v'
        }
        store.dispatch(action);
    }

    handleDelete(index) {
       const action = {
           type:'delete-item-v',
           index
       }
       store.dispatch(action);
    }

    render() {
        return (
            <div style={{marginLeft:'10px', marginTop:'10px'}}>
                <div>
                    <Input onChange={this.handleInputChange} placeholder="todo list" style={{width: '300px', marginRight: '10px'}} value={this.state.inputData}/>
                    <Button type='primary' onClick={this.handleTaskAdd}>添加任务</Button>
                </div>
                <List
                    style = {{marginTop:'10px', width:'300px'}}
                    size="small"
                    bordered
                    dataSource={this.state.dataList}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleDelete.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>

        );
    }
}

export default TodoList;