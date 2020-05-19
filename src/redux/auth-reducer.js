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


export const setUserData = (data) => ({
    type: SET_USER_DATE,
    data
});


export default authReducer;