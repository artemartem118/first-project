import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATE = 'auth/SET_USER_DATE';
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE: {
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


export const setUserData = () => async dispatch => {
    const response = await authAPI.setProfileData();
    if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data;
        dispatch(setUserDataAccess(id, login, email, true))
    }
}

export const loginUser = (email, password, rememberMe) => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(setUserData())
    } else {
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


export default authReducer;