import {setUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};


export const setInitializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
});


export const initializeApp = () => async (dispatch) => {
    await dispatch(setUserData());
    dispatch(setInitializedSuccess());
}


export default appReducer;