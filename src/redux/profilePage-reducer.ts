import {profileAPI, ResultCodes} from '../API/api'
import {PhotosType, PostDataType, UserProfileType} from '../types/types'
import {ThunkAction} from 'redux-thunk'
import {ActionsTypes, AppState} from './redux-store'

let initialState = {
    postsData: [
        {id: 1, message: 'i dont know', counterLike: 2},
        {id: 2, message: 'what?', counterLike: 1}
    ] as Array<PostDataType>,
    userProfile: null as null | UserProfileType,
    userStatus: ''
}

export type InitialStateProfileType = typeof initialState

const profilePageReducer = (state = initialState, action: Actions): InitialStateProfileType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 5, message: action.newPost,
                    counterLike: 0
                }]
            }
        }
        case 'profile/SET_USER_PROFILE': {
            return {
                ...state,
                userProfile: action.user
            }
        }
        case 'profile/SET_STATUS': {
            return {
                ...state,
                userStatus: action.status
            }
        }
        case 'profile/SET_PHOTO': {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos} as UserProfileType
            }
        }
        default:
            return state
    }
}

export type ThunkActionProfileType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export type Actions = ActionsTypes<typeof actionsProfile>

export const actionsProfile = {
    addPost: (newPost: string) => ({type: 'profile/ADD-POST', newPost} as const),
    setUserProfile: (user: UserProfileType) => ({type: 'profile/SET_USER_PROFILE', user} as const),
    setUserStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SET_PHOTO', photos} as const)
}

export const getUser = (userId: number): ThunkActionProfileType => {
    return async (dispatch) => {
        const getUserData = await profileAPI.getProfile(userId)
        dispatch(actionsProfile.setUserProfile(getUserData))
    }
}

export const getStatusUser = (userId: number): ThunkActionProfileType => {
    return async (dispatch) => {
        const getStatusUserData = await profileAPI.getStatus(userId)
        dispatch(actionsProfile.setUserStatus(getStatusUserData))
    }
}

export const updateStatusUser = (status: string): ThunkActionProfileType => {
    return async (dispatch) => {
        const updateStatusUserData = await profileAPI.updateStatus(status)
        if (updateStatusUserData.resultCode === ResultCodes.success) {
            dispatch(actionsProfile.setUserStatus(status))
        }
    }
}

export const savePhoto = (photo: File): ThunkActionProfileType => async (dispatch) => {
    const savePhotoData = await profileAPI.savePhoto(photo)
    if (savePhotoData.resultCode === ResultCodes.success) {
        dispatch(actionsProfile.savePhotoSuccess(savePhotoData.data.photos))
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
