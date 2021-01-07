import { createStore } from 'redux';
import reducer from './reducer';
//github redux-devTools-extension 有说明
const defaultState = {
    inputData: '初始化的数据',
    dataList: []
}
const store = createStore(reducer, defaultState);
export default store;