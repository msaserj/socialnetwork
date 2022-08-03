import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";


export let rerenderTree = () => {
    const state = store.getState();
    const dispatch = store.dispatch

    ReactDOM.render(
        <BrowserRouter>
            <App store={state} dispatch={dispatch}/>
        </BrowserRouter>,
        document.getElementById('root') );
}
// rerender
store.subscribe(rerenderTree)

// first render
rerenderTree()

