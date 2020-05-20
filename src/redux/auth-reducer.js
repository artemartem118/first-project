import {authAPI} from "../API/api";

const SET_USER_DATE = 'SET_USER_DATE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATE: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
};


export const setUserDataAccess = (data) => ({
    type: SET_USER_DATE,
    data
});
export const setUserData = () => {
    return (dicpatch) => {
        authAPI.setProfileData()
            .then(response => {
            if(response.data.resultCode === 0) {
                dicpatch(setUserDataAccess(response.data.data))
            }
        })
    }
}



export default authReducer;