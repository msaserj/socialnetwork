import React from 'react';
import css from "./LeftWidgets.module.scss"
import {ProfileWidget} from "../03-Main/SideWidgets/ProfileWidget/ProfileWidget";
import {MainWidget} from "../03-Main/MainWidget/MainWidget";
import LastMembers from "../03-Main/SideWidgets/LastMembers/LastMembers";
import {withSuspense} from "../../hoc/withSuspense";
import {useAppSelector} from "../../hooks/hooks";
const Login = React.lazy(() => import("../../components/03-Main/SideWidgets/Login/Login"))
const LoginComponent = withSuspense(Login)



export const LeftWidgets = () => {

    const isAuth = useAppSelector(state => state.auth.data.id)
    console.log(isAuth)

    return (
        <div className={css.sideSection}>

            {!isAuth?
                <MainWidget title={"Login"}><LoginComponent/></MainWidget> :
                <ProfileWidget/>
            }
            <MainWidget title={"Last Members"}><LastMembers/></MainWidget>
        </div>
    );
};
