import {CHANGE_INPUT_V, ADD_INPUT_V, DELETE_INPUT_V, INIT_DATA} from './actionTypes';
import axios from "axios";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_V,
    value
});

export const getInputAddAction = () => ({
    type: ADD_INPUT_V
});

export const getInputDeleteAction = (index) => ({
    type: DELETE_INPUT_V,
    index
});

export const getAjaxInitDataAction = (dataList) => ({
    type: INIT_DATA,
    dataList
});

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
