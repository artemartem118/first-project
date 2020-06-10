import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {
    getStatusUser,
    getUser,
    savePhoto,
    saveProfile,
    ThunkActionProfileType,
    updateStatusUser
} from '../../redux/profilePage-reducer'
import {compose} from 'redux'
import {AppState} from '../../redux/redux-store'
import {UserProfileType} from '../../types/types'
import {InitialStateAuth} from '../../redux/auth-reducer'

type AllProps = MapDispatchProps & MapStateProps & RouteComponentProps<any>

class ProfileContainer extends React.Component<AllProps> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUser(userId)
        this.props.getStatusUser(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: AllProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     ifOwner={!this.props.match.params.userId}
                     updateStatusUser={this.props.updateStatusUser}
                     userProfile={this.props.userProfile}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     status={this.props.status}
            />
        )
    }
}

type MapStateProps = {
    userProfile: UserProfileType | null
    status: string
    userId: number | null
    isAuth: boolean
    auth: InitialStateAuth
}

type MapDispatchProps = {
    getUser: (userId: number) => ThunkActionProfileType
    getStatusUser: (userId: number) => ThunkActionProfileType
    updateStatusUser: (status: string) => ThunkActionProfileType
    savePhoto: (photo: File) => ThunkActionProfileType
    saveProfile: (userProfile: UserProfileType) => ThunkActionProfileType
}

const mapStateToProps = (state: AppState): MapStateProps => ({
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.userStatus,
    userId: state.auth.id,
    isAuth: state.auth.isAuth,
    auth: state.auth
})


export default compose(
    withRouter,
    connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, {
        getUser,
        getStatusUser,
        updateStatusUser,
        savePhoto,
        saveProfile
    })
)(ProfileContainer)
