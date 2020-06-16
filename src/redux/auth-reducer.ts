import {authAPI, ResultCodeForCaptcha, ResultCodes, securityAPI} from '../API/api'
import {ThunkAction} from 'redux-thunk'
import {ActionsTypes, AppState} from './redux-store'

export type InitialStateAuth = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
    captchaUrl: null | string
}

let initialState: InitialStateAuth = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: Actions): InitialStateAuth => {
    switch (action.type) {
        case 'auth/SET_USER_DATE':
        case 'auth/SET_CAPTCHA': {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

type Actions = ActionsTypes<typeof actionsAuth>

export const actionsAuth = {
    setCaptchaSuccess: (captchaUrl: string) => ({
        type: 'auth/SET_CAPTCHA',
        payload: {captchaUrl}
    } as const),
    setUserDataAccess: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'auth/SET_USER_DATE',
        payload: {id, login, email, isAuth}
    } as const)
}

export type ThunkActionAuthType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const setUserData = (): ThunkActionAuthType => async (dispatch) => {
    const userData = await authAPI.setProfileData()
    if (userData.resultCode === ResultCodes.success) {
        const {id, login, email} = userData.data
        dispatch(actionsAuth.setUserDataAccess(id, login, email, true))
    }
}

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkActionAuthType => async (dispatch) => {
    const loginUserData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginUserData.resultCode === ResultCodes.success) {
        dispatch(setUserData())
    } else if (loginUserData.resultCode === ResultCodeForCaptcha.captcha) {
        dispatch(getCaptcha())
    }
}

export const logoutUser = (): ThunkActionAuthType => async (dispatch) => {
    const logoutUserData = await authAPI.logout()
    if (logoutUserData.resultCode === ResultCodes.success) {
        dispatch(actionsAuth.setUserDataAccess(null, null, null, false))
    }
}

export const getCaptcha = (): ThunkActionAuthType => async (dispatch) => {
    const getCaptchaData = await securityAPI.getCaptcha()
    dispatch(actionsAuth.setCaptchaSuccess(getCaptchaData.url))
}

export default authReducer
