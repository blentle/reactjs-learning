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
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange() {
        //重新取一次store中的数据
        this.setState(store.getState());
    }

    handleInputChange(event) {
        //修改store中的数据
        const action = {
            type:'change-input-v',
            value: event.target.value
        }
        store.dispatch(action);
    }

    render() {
        return (
            <div style={{marginLeft:'10px', marginTop:'10px'}}>
                <div><Input onChange={this.handleInputChange} placeholder="todo list" style={{width: '300px', marginRight: '10px'}} value={this.state.inputData}/><Button type='primary'>搜索</Button></div>
                <List
                    style = {{marginTop:'10px', width:'300px'}}
                    size="small"
                    bordered
                    dataSource={this.state.dataList}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>

        );
    }
}

export default TodoList;