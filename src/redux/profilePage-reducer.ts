import {profileAPI, ResultCodes} from '../API/api'
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
        const getUserData = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(getUserData))
    }
}

export const getStatusUser = (userId: number): ThunkActionProfileType => {
    return async (dispatch) => {
        const getStatusUserData = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(getStatusUserData))
    }
}

export const updateStatusUser = (status: string): ThunkActionProfileType => {
    return async (dispatch) => {
        const updateStatusUserData = await profileAPI.updateStatus(status)
        if (updateStatusUserData.resultCode === ResultCodes.success) {
            dispatch(setUserStatus(status))
        }
    }
}

export const savePhoto = (photo: File): ThunkActionProfileType => async (dispatch) => {
    const savePhotoData = await profileAPI.savePhoto(photo)
    if (savePhotoData.resultCode === ResultCodes.success) {
        dispatch(savePhotoSuccess(savePhotoData.data.photos))
    }
}

export const saveProfile = (userProfile: UserProfileType): ThunkActionProfileType => async (dispatch, getState) => {
    const id = getState().auth.id
    const saveProfileData = await profileAPI.saveProfile(userProfile)
    if (saveProfileData.resultCode === ResultCodes.success) {
        if (id) dispatch(getUser(id))
    }
}

export default profilePageReducer
