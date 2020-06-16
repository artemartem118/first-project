import React from 'react'
import Wall from './Wall'
import {connect} from 'react-redux'
import {actionsProfile} from '../../../redux/profilePage-reducer'
import {AppState} from '../../../redux/redux-store'
import {PostDataType} from '../../../types/types'

const addPost = actionsProfile.addPost

type MapStateToProps = {
    postsData: Array<PostDataType>
}

type MapDispatchToProps = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: AppState): MapStateToProps => {
    return {
        postsData: state.profilePage.postsData
    }
}

export default connect<MapStateToProps, MapDispatchToProps, null, AppState>(mapStateToProps, {addPost})
(Wall)