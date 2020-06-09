import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {AppState} from '../../redux/redux-store'

type MapStateProps = {
    isAuth: boolean
}

let mapStateToProps = (state: AppState): MapStateProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

type Props = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: React.FC) => {
    const RedirectComponent: React.FC<Props> = (props) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props} />
    }
    return connect<MapStateProps, null, null, AppState>(mapStateToProps)(RedirectComponent)
}


