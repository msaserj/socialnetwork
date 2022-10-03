import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, UserProfileType} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let params = useParams();
        return <Component{...props} userId={params.userId}/>
    }
    return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        // debugger
        this.props.getUserProfile(this.props.userId)
    }
    render() {
        if(this.props.isAuth) return <Navigate to="/login"/>
        return (
            <Profile userProfile={this.props.profile} isAuth/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile: getUserProfileTC
}), withRouter)(ProfileContainer)

// types
type MapStateToPropsType = {
    profile: UserProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (profileId: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    userId: string
}