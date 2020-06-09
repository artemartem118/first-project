import {profileAPI} from '../API/api'
import {PhotosType, PostDataType, UserProfileType} from '../types/types'
import {ThunkAction} from 'redux-thunk'
import {AppState} from './redux-store'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_PHOTO = 'profile/SET_PHOTO'

let initialState = {
    postsData: [
        {id: 1, message: 'i dont know', counterLike: 2},
        {id: 2, message: 'what?', counterLike: 1}
    ] as Array<PostDataType>,
    userProfile: null as null | UserProfileType,
    userStatus: ''
}

export type InitialStateProfileType = typeof initialState

const profilePageReducer = (state = initialState, action: ProfileActions): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 5, message: action.newPost,
                    counterLike: 0
                }]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.user
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                userStatus: action.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} as UserProfileType
            }
        }
        default:
            return state
    }
}

export type ThunkActionProfileType = ThunkAction<Promise<void>, AppState, unknown, ProfileActions>

export type ProfileActions = AddPostType | SetUserProfileType | SetUserStatusType | SavePhotoSuccessType

export type AddPostType = {
    type: typeof ADD_POST
    newPost: string
}
export const addPost = (newPost: string): AddPostType => ({type: ADD_POST, newPost})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    user: UserProfileType
}
export const setUserProfile = (user: UserProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, user})

type SetUserStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatusType => ({type: SET_STATUS, status})

type SavePhotoSuccessType = {
    type: typeof SET_PHOTO
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SET_PHOTO, photos})


export const getUser = (userId: number): ThunkActionProfileType => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatusUser = (userId: number): ThunkActionProfileType => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}

export const updateStatusUser = (status: string): ThunkActionProfileType => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export const savePhoto = (photo: File): ThunkActionProfileType => async (dispatch) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (userProfile: UserProfileType): ThunkActionProfileType => async (dispatch, getState) => {
    const id = getState().auth.id
    const response = await profileAPI.saveProfile(userProfile)
    if (response.data.resultCode === 0) {
        if (id)
            dispatch(getUser(id))
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    }
}

export default profilePageReducer
