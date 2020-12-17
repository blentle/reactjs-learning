import React, {Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.handleDel = this.handleDel.bind(this);
    }

    handleDel() {
        //调用父组件,删除父组件 dataList数据
        //先从父组件里传过来的参数拿到要删除的行号
        const removedIndex = this.props.index;
        this.props.deleteItem(removedIndex)
    }

    render() {
        return <div onClick={this.handleDel}>{this.props.con}</div>
    }
}

//拿到的属性做校验
TodoItem.propTypes = {
    con: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

export default TodoItem;