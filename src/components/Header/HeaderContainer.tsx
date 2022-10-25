import React from "react";
import {Header} from "./Header";
import {AuthType, getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthPropsType> {


    render() {
        return <Header authHeader={this.props.authData} logoutTC={this.props.logoutTC}/>
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        authData: state.auth,
    }
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>
(mapStateToProps, {getAuthUserData: getAuthUserDataTC, logoutTC})(HeaderContainer);

type MapStateToPropsType = {
    authData: AuthType
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logoutTC: () => void
}
