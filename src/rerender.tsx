import {RootStateType} from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}