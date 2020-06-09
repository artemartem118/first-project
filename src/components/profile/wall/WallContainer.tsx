import React from 'react'
import Wall from './Wall'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {addPost, AddPostType, InitialStateProfileType} from '../../../redux/profilePage-reducer'
import {AppState} from '../../../redux/redux-store'

type MapStateToProps = {
    profilePage: InitialStateProfileType
}

type MapDispatchToProps = {
    addPost: (newPost: string) => AddPostType
}

const mapStateToProps = (state: AppState): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}

export default compose(
    connect<MapStateToProps, MapDispatchToProps, null, AppState>(mapStateToProps, {addPost})
)(Wall)