import React from 'react';
import './index.css';
import {store} from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


export let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root') );
}



rerenderTree();

store.subscribe(rerenderTree);