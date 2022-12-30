import React from 'react';
import './App.scss';
import HeaderContainer from "./components/01-Header/HeaderContainer";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/00-Common/Preloader/Preloader";
import {Footer} from "./components/05-Footer/Footer";
import Main from "./components/03-Main/Main";
import {CoverPhoto} from "./components/03-Main/CoverPhoto/CoverPhoto";
import {LeftWidgets} from "./components/02-LeftWidgets/LeftWidgets";
import {RightWidgets} from "./components/04-RightWidgets/RightWidgets";

class App extends React.Component<AuthPropsType> {

    catchAllUnhandledErrors = (promiseRejectionEvent: Event) => {
        console.log("Catched unhandled error: ", promiseRejectionEvent)
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

                    <LeftWidgets/>
                    <Main/>
                    <RightWidgets/>

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
