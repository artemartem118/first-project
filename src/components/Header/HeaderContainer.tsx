import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {InitialStateAuth, logoutUser} from '../../redux/auth-reducer'
import {compose} from 'redux'
import {AppState} from '../../redux/redux-store'

type MapStateProps = {
    auth: InitialStateAuth
}

type MapDispatchProps = {
    logoutUser: () => void
}

type Props = MapStateProps & MapDispatchProps

class HeaderContainer extends React.Component<Props> {

    render() {
        return <Header logout={this.props.logoutUser} {...this.props}/>
    }
}

const mapStateToProps = (state: AppState): MapStateProps => {
    return {
        auth: state.auth,
    }
}

export default compose(
    connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, {logoutUser})
)(HeaderContainer)
