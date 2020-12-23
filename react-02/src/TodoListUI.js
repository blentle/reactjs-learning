import React, { Component} from 'react';
import {Button, Input, List} from "antd";
class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginLeft: '10px', marginTop: '10px'}}>
                <div>
                    <Input onChange={this.props.handleInputChange} placeholder="todo list"
                           style={{width: '300px', marginRight: '10px'}} value={this.props.inputData}/>
                    <Button type='primary' onClick={this.props.handleTaskAdd}>添加任务</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    size="small"
                    bordered
                    dataSource={this.props.dataList}
                    renderItem={(item) => (
                        <List.Item onClick= {(index)=> {this.props.handleDelete(index)}}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
export default TodoListUI;