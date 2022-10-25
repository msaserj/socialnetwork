import React from 'react';
import {Navigate} from "react-router-dom";
import {RootState} from "../redux/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: RootState): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    } as MapStateToPropsForRedirectType
}

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login"/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
};

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}