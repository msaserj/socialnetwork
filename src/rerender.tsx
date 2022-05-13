import {RootStateType} from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App  />
        </BrowserRouter>,
        document.getElementById('root') );}