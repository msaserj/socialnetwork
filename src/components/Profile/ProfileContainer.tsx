import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusTC, getUserProfileTC, updateStatusTC, UserProfileType} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let params = useParams();
        return <Component{...props} userId={params.userId ? params.userId : props.myId}/>
    }
    return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        // debugger
        this.props.getUserProfile(this.props.userId)

        this.props.getStatus(this.props.userId)
    }
    render() {

        return (
            <Profile
                status={this.props.status}
                userProfile={this.props.profile}
                updateStatus={this.props.updateStatus}
                getStatus={this.props.getStatus}
                isAuth/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.userProfile,
        status: state.profilePage.status,
        myId: state.auth.data.id,
        isAuth: state.auth.isAuth
    }
}


// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile: getUserProfileTC, getStatus: getStatusTC, updateStatus: updateStatusTC}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)



// types
type MapStateToPropsType = {
    profile: UserProfileType | null
    status: string
    myId: number
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (profileId: string) => void
    getUserStatus: (profileId: string) => void
    getStatus: (profileId: string) => void
    updateStatus: (status: string) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    userId: string
}