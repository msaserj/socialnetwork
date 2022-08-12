import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route} from 'react-router-dom';
import {AppStateType, DispatchStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsType = {
    store: any
    dispatch: DispatchStoreType
}

const App: React.FC<PropsType> = (props) => {
   // const state = props.store;

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer
                            //dispatch={props.dispatch}
                            //state={state}
                        />}/>
                        <Route path="/profile/*" element={<Profile
                            dispatch={props.dispatch}
                            state={props.store}
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
