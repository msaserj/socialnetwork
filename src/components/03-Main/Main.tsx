import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileContainer from "../SideWidgets/ProfileMain/ProfileContainer";
import UsersContainer from "../SideWidgets/Users/UsersContainer";
import {withSuspense} from "../../hoc/withSuspense";
import css from "./Main.module.scss"
import Chat from "../../pages/chat/Chat";
import {MainWidget} from "./MainWidget/MainWidget";
import Registration from "../SideWidgets/Registration/Registration";
import RecoveryPass from "../SideWidgets/RecoveryPass/RecoveryPass";

const DialogsContainer = React.lazy(()=>
    import("../SideWidgets/Dialogs/DialogsContainer")
        .then(({DialogsContainer}) => ({default: DialogsContainer}))
)
const MyPostsContainer = React.lazy(()=>
    import("../SideWidgets/MyPosts/MyPostsContainer")
        .then(({MyPostsContainer}) => ({default: MyPostsContainer}))
)


const Main = () => {
    const DialogsContain = withSuspense(DialogsContainer)
    const MyPostsContain = withSuspense(MyPostsContainer)

    return (
        <div className={css.main}>

            <Routes>
                <Route path="/dialogs/" element={<MainWidget title={"Dialogs"}><DialogsContain/></MainWidget>}/>
                <Route path="/posts/" element={<MainWidget title={"My Posts"}><MyPostsContain/></MainWidget>}/>
                <Route path='/profile' element={<MainWidget title={"Profile"}><ProfileContainer/></MainWidget>}>
                    <Route path='/profile/:userId' element={<MainWidget title={"Profile"}><ProfileContainer/></MainWidget>}/>
                </Route>
                <Route path="/users" element={<MainWidget title={"Users"}><UsersContainer/></MainWidget>}/>
                <Route path="/chat" element={ <MainWidget title={"CommonChat"}><Chat/></MainWidget> }/>
                <Route path="*" element={<div>404</div>}/>
                <Route path="/" element={<Navigate to={"/profile"}/>}/>
                <Route path="/registr" element={<MainWidget title={"Registration"}><Registration/></MainWidget> }/>
                <Route path="/recovery" element={<MainWidget title={"Registration"}><RecoveryPass/></MainWidget> }/>
            </Routes>

        </div>
    );
};

export default Main;