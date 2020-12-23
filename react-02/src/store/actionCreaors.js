import {CHANGE_INPUT_V, ADD_INPUT_V, DELETE_INPUT_V, INIT_DATA} from './actionTypes';

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
