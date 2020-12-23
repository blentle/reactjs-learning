import {createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from "redux-thunk";
//github redux-devTools-extension 有说明
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(reducer, enhancer);
export default store;