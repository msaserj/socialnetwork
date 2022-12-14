import React from 'react';
import './App.css';
import HeaderContainer from "./components/01-Header/HeaderContainer";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/00-Common/Preloader/Preloader";
import {Footer} from "./components/05-Footer/Footer";
import Main from "./components/04-Main/Main";
import {CoverPhoto} from "./components/04-Main/CoverPhoto/CoverPhoto";
import {withSuspense} from "./hoc/withSuspense";
import {Widget} from "./components/04-Main/Widget/Widget";
import LastMembers from "./components/LastMembers/LastMembers";
import {HashBar} from "./components/03-RightBar/HashTags/HashBar";

const Login = React.lazy(() => import("./components/00-Common/Login/Login"))

//
// const ChatPage = React.lazy(()=>
//     import("./pages/chat/ChatPage")
//         .then(({ChatPage}) => ({default: ChatPage}))
// )
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

                        <Widget title={"Login"}><LoginComponent/></Widget>
                        <Widget title={"Last Members"}><LastMembers/></Widget>

                    </div>
                    <Main/>
                    <div className={"side-section right"}>
                        <Widget title={"Hash Tags"}><HashBar/></Widget>
                        <Widget title={"Last Members"}>asasaasas</Widget>
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
