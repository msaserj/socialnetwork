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




store.subscribe(rerenderTree)

rerenderTree()




// type RootStateType = {
//     dialogPage: Array<DialogPageType>
//     post: Array<PostType>
//     sidebar: Array<SidebarType>
// }
// type PostType = {
//     id: string
//     message: string
//     likesCount: number
// }

// type DialogPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageState: string
// }
// type MessageType = {
//     id: string
//     message: string
// }
// type DialogType = {
//     id: string
//     name: string
// }
// type SidebarType = {}