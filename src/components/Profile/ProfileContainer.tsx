import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
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

        let profileId = this.props.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
            .then(res => {
                this.props.setUserProfile(res.data)
                console.log(res.data)
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

// connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
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
    userId:number
}