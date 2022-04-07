import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Profile/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {Routes, Route, BrowserRouter} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
