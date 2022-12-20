import React from 'react';
import css from "./LeftWidgets.module.scss"
import {ProfileWidget} from "../03-Main/SideWidgets/ProfileWidget/ProfileWidget";
import {MainWidget} from "../03-Main/MainWidget/MainWidget";
import LastMembers from "../03-Main/SideWidgets/LastMembers/LastMembers";
import {withSuspense} from "../../hoc/withSuspense";
const Login = React.lazy(() => import("../../components/03-Main/SideWidgets/Login/Login"))

const LoginComponent = withSuspense(Login)


export const LeftWidgets = () => {
    return (
        <div className={css.sideSection}>
            <ProfileWidget/>
            <MainWidget title={"Last Members"}><LastMembers/></MainWidget>
            <MainWidget title={"Login"}><LoginComponent/></MainWidget>
        </div>
    );
};
