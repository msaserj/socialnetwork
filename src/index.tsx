import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";


export let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root') );
}

rerenderTree();

store.subscribe(rerenderTree);