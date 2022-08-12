import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {AppStateType, store} from "./redux/redux-store";
import {Provider} from "react-redux";

// type ProvederSyoreType = {
//     store: AppStateType
// }


export let rerenderTree = () => {
  const state = store
    const dispatch = store.dispatch


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  dispatch={dispatch} store={state}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root') );
}
// ReRender
store.subscribe(rerenderTree)

// first render
rerenderTree()

