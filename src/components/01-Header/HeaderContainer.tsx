import React from "react";
import {Header} from "./Header";
import {DataType, getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthPropsType> {


    render() {
        return <Header authHeader={this.props.authData}
                       logoutTC={this.props.logoutTC}
                       avatar={this.props.avatar}
                       id={this.props.id}
                       name={this.props.name}/>
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        authData: state.auth.data,
        id: state.myProfile.myProfile.userId,
        name: state.myProfile.myProfile.fullName,
        avatar: state.myProfile.myProfile.photos,
    }
}
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootState>
(mapStateToProps, {getAuthUserData: getAuthUserDataTC, logoutTC})(HeaderContainer);

type MapStateToPropsType = {
    authData: DataType
    id: number
    name: string
    avatar: {small: string, large: string}
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logoutTC: () => void
}
