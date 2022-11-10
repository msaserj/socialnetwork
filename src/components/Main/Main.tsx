import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import {ChatPage} from "../../pages/chat/ChatPage";
import {withSuspense} from "../../hoc/withSuspense";
import css from "./Main.module.css"

const DialogsContainer = React.lazy(()=>
    import("../../components/Dialogs/DialogsContainer")
        .then(({DialogsContainer}) => ({default: DialogsContainer}))
)
const Login = React.lazy(()=> import("../../components/Login/Login"))

const Main = () => {
    const DialogsContain = withSuspense(DialogsContainer)
    const LoginComponent = withSuspense(Login)
    return (
        <div className={css.main}>
            <Routes>
                <Route path="/dialogs/" element={<DialogsContain/>}/>
                <Route path='/' element={<ProfileContainer/>}>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                </Route>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/login" element={<LoginComponent/>}/>
                <Route path="/chat" element={<ChatPage/>}/>
                <Route path="*" element={<div>404</div>}/>
                {/*<Route path="/settings" element={<Settings />}/>*/}
            </Routes>

        </div>
    );
};

export default Main;