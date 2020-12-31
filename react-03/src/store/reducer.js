import {CHANGE_INPUT_V, ADD_INPUT_V, DELETE_INPUT_V, INIT_DATA} from './actionTypes';
const defaultState = {
    inputData: '初始化的数据',
    dataList:['Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.']
}

export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_V) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputData = action.value;
        //返回修改好的state 给 store, 由store来修改, reducer并不修改 store的数据
        return newState;
    }

    if(action.type === ADD_INPUT_V) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.dataList.push(newState.inputData);
        //返回修改好的state 给 store, 由store来修改, reducer并不修改 store的数据
        newState.inputData = '';
        return newState;
    }

    if(action.type === DELETE_INPUT_V) {
        const newState = JSON.parse(JSON.stringify(state));
        const index = action.index
        newState.dataList.splice(index, 1)
        //返回修改好的state 给 store, 由store来修改, reducer并不修改 store的数据
        return newState;
    }

    if(action.type === INIT_DATA) {
        const newState = JSON.parse(JSON.stringify(state));
        const dataList = action.dataList;
        newState.dataList = dataList;
        //返回修改好的state 给 store, 由store来修改, reducer并不修改 store的数据
        return newState;
    }

    return state;
}