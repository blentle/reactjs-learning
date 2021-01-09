import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <TodoList/>
    </Provider>
    , document.getElementById('root')
);
