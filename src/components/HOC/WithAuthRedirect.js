import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAutnRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if(!props.isAuth) return <Redirect to={'/login'} />
        return <Component />
    }

    return connect(mapStateToProps)(RedirectComponent);


};


