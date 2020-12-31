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
                renderItem={(item,index) => (
                    <List.Item onClick= {()=> {props.handleDelete(index)}}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );
}

export default TodoListUI;