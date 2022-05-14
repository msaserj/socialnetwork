import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route} from 'react-router-dom';
import {store, StoreType} from "./redux/state.js";
// import {addPost, state, updateNewPostText} from "./redux/state.js";
type PropsType = {
    store: StoreType
}


const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path="/dialogs/*" element={<Dialogs
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                        />}/>
                        <Route path="/profile/*" element={<Profile
                            posts={state.profilePage.posts}
                            updateNewPostTextCallBack={props.store.updateNewPostText.bind(props.store)}
                            addPostCallBack={props.store.addPost.bind(props.store)}
                            newPostText={state.profilePage.newPostText}
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
