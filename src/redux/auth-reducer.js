import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATE = 'auth/SET_USER_DATE';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE:
        case SET_CAPTCHA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
};


export const setUserDataAccess = (id, login, email, isAuth) => ({
    type: SET_USER_DATE,
    payload: {id, login, email, isAuth}
});
export const setCaptchaSuccess = (captchaUrl) => ({
    type: SET_CAPTCHA,
    payload: {captchaUrl}
});


export const setUserData = () => async dispatch => {
    const response = await authAPI.setProfileData();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setUserDataAccess(id, login, email, true))
    }
}

export const loginUser = (email, password, rememberMe, captcha) => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(setUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutUser = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataAccess(null, null, null, false));
    }
}

export const getCaptcha = () => async dispatch => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaSuccess(captchaUrl));
}

export default authReducer;