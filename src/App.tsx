import React from 'react';
import './App.css';
import {SideBar} from "./components/Sidebar/SideBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import {Footer} from "./components/Footer/Footer";
import {HashBar} from "./components/HashTags/HashBar";
import Main from "./components/Main/Main";

//
// const ChatPage = React.lazy(()=>
//     import("./pages/chat/ChatPage")
//         .then(({ChatPage}) => ({default: ChatPage}))
// )

class App extends React.Component<AuthPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: Event) => {
        alert(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <SideBar/>
                <HashBar/>
                <Main/>
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
