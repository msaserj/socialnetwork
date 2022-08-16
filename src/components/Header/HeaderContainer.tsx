import React from "react";

import {Header} from "./Header";
import axios from "axios";
import {AuthType, setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(res => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthData(res.data)
                }
            })
    }
    render() {
        return <Header authHeader={this.props.authData}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authData: state.auth

    }
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {setAuthData})(HeaderContainer);

type MapStateToPropsType = {
    authData: AuthType
}

type MapDispatchToPropsType = {
    setAuthData: (data: AuthType) => void
}
