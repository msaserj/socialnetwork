import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Route, Routes} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {compose} from "redux";
import {initializeTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {ChatPage} from "./pages/chat/ChatPage";
import {Footer} from "./components/Footer/Footer";


const DialogsContainer = React.lazy(()=>
    import("./components/Dialogs/DialogsContainer")
        .then(({DialogsContainer}) => ({default: DialogsContainer}))
)
const Login = React.lazy(()=> import("./components/Login/Login"))
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
        const DialogsContain = withSuspense(DialogsContainer)
        const LoginComponent = withSuspense(Login)

        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='app-wrapper-content'>
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
