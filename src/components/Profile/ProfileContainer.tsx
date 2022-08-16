import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {usersAPI} from "../../api/api";


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
        let profileId = this.props.userId;
        usersAPI.getProfile(profileId).then(data => {
                this.props.setUserProfile(data)
            })
    }
    render() {
        return (
            <Profile userProfile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.userProfile
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    setUserProfile
}), withRouter)(ProfileContainer)

// types
type MapStateToPropsType = {
    profile: UserProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    userId: string
}