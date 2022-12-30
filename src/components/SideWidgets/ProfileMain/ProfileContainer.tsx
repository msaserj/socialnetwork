import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {
    getStatusTC,
    getUserProfileTC,
    savePhotoTC,
    saveProfileTC,
    updateStatusTC,
    UserProfileType
} from "../../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";


function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let params = useParams();
        return <Component{...props} userId={params.userId ? params.userId : props.myId}/>
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component<ProfilePropsType> {

    refreshProfile() {
        this.props.getUserProfile(this.props.userId)
        this.props.getStatus(this.props.userId)
    }

    componentDidMount() {
        // debugger
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if ((this.props.userId) !== prevProps.userId) {
            this.refreshProfile()
        }
    }
    render() {

        return (
            <Profile
                status={this.props.status}
                userProfile={this.props.profile}
                updateStatus={this.props.updateStatus}
                getStatus={this.props.getStatus}
                isAuth
                isOwner={this.props.myId === +this.props.userId}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile} resultCode={this.props.resultCode}/>
        );
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        resultCode: state.profilePage.resultCode,
        profile: state.profilePage.userProfile,
        status: state.profilePage.status,
        myId: state.auth.data.id,
        isAuth: state.auth.isAuth,
    }
}

// compose allows us to add new HOCs, that is wrap our component to HOCs with universal options
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC,
        savePhoto: savePhotoTC,
        saveProfile: saveProfileTC
    }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)


// types
type MapStateToPropsType = {
    resultCode: number
    profile: UserProfileType | null
    status: string
    myId: number
    isAuth: boolean | undefined
}

type MapDispatchToPropsType = {
    getUserProfile: (profileId: string) => void
    getStatus: (profileId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (file: any,  setStatus: any, setSubmitting: any) => void
}
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & {
    userId: string
}