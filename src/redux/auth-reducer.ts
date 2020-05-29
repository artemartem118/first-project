import {authAPI, securityAPI} from "../API/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATE = 'auth/SET_USER_DATE'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'

type InitialStateType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
    captchaUrl: null | string
}


let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATE:
        case SET_CAPTCHA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
type PayloadSetUserDataAccessType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type SetUserDataAccessType = {
    type: typeof SET_USER_DATE
    payload: PayloadSetUserDataAccessType
}

export const setUserDataAccess = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetUserDataAccessType => ({
    type: SET_USER_DATE,
    payload: {id, login, email, isAuth}
})


type PayloadSetCaptchaSuccessType = {
    captchaUrl: string
}
type SetCaptchaSuccessType = {
    type: typeof SET_CAPTCHA
    payload: PayloadSetCaptchaSuccessType
}
export const setCaptchaSuccess = (captchaUrl: string): SetCaptchaSuccessType => ({
    type: SET_CAPTCHA,
    payload: {captchaUrl}
})


export const setUserData = () => async (dispatch: any) => {
    const response = await authAPI.setProfileData();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setUserDataAccess(id, login, email, true))
    }
}

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(setUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutUser = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAccess(null, null, null, false));
    }
}

export const getCaptcha = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(setCaptchaSuccess(captchaUrl))
}

export default authReducer