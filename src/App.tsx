import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route} from 'react-router-dom';
import {AppStoreType, DispatchStoreType} from "./redux/redux-store";

type PropsType = {
    store: AppStoreType
    dispatch: DispatchStoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store;

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            dispatch={props.dispatch}
                            newMessageState={state.dialogsPage.newMessageState}/>}/>
                        <Route path="/profile/*" element={<Profile
                            posts={state.profilePage.posts}
                            dispatch={props.dispatch}
                            newPostText={state.profilePage.newTextState}
                         />}/>
                        {/*<Route path="/news" element={<News />}/>*/}
                        {/*<Route path="/music" element={<Music />}/>*/}
                        {/*<Route path="/settings" element={<Settings />}/>*/}
                    </Routes>
                </div>
            </div>
    );
}
export default App;
