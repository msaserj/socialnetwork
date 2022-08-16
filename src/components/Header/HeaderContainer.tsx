import React from "react";
import {Header} from "./Header";
import {AuthType, setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount() {
        usersAPI.getAuthMe().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthData(data)
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
