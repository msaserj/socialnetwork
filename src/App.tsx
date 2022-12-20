import React from 'react';
import './App.css';
import HeaderContainer from "./components/01-Header/HeaderContainer";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/00-Common/Preloader/Preloader";
import {Footer} from "./components/05-Footer/Footer";
import Main from "./components/03-Main/Main";
import {CoverPhoto} from "./components/03-Main/CoverPhoto/CoverPhoto";
import {withSuspense} from "./hoc/withSuspense";
import {MainWidget} from "./components/03-Main/MainWidget/MainWidget";
import LastMembers from "./components/03-Main/SideWidgets/LastMembers/LastMembers";
import {HashBar} from "./components/03-Main/SideWidgets/HashTags/HashBar";
import {SiteInfo} from "./components/03-Main/SideWidgets/SiteInfo/SiteInfo";
import {ProfileWidget} from "./components/03-Main/SideWidgets/ProfileWidget/ProfileWidget";

const Login = React.lazy(() => import("./components/03-Main/SideWidgets/Login/Login"))

const LoginComponent = withSuspense(Login)

class App extends React.Component<AuthPropsType> {


    catchAllUnhandledErrors = (promiseRejectionEvent: Event) => {
        console.log(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>

                <div className="main-section">
                    <CoverPhoto/>
                    <div className={"side-section left"}>
                        <ProfileWidget/>
                        <MainWidget title={"Last Members"}><LastMembers/></MainWidget>
                        <MainWidget title={"Login"}><LoginComponent/></MainWidget>

                    </div>
                    <Main/>
                    <div className={"side-section right"}>
                        <MainWidget title={"Site Info"}><SiteInfo/></MainWidget>
                        <MainWidget title={"Hash Tags"}><HashBar/></MainWidget>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
    }
}
export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>
    (mapStateToProps, {initializeApp: initializeTC})(App));

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
