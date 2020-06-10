import React from 'react'
import Wall from './Wall'
import {connect} from 'react-redux'
import {addPost, AddPostType} from '../../../redux/profilePage-reducer'
import {AppState} from '../../../redux/redux-store'
import {PostDataType} from '../../../types/types'

type MapStateToProps = {
    postsData: Array<PostDataType>
}

type MapDispatchToProps = {
    addPost: (newPost: string) => AddPostType
}

const mapStateToProps = (state: AppState): MapStateToProps => {
    return {
        postsData: state.profilePage.postsData
    }
}

export default connect<MapStateToProps, MapDispatchToProps, null, AppState>(mapStateToProps, {addPost})
(Wall)