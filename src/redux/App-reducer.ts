import {setUserData} from "./auth-reducer"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'


export type InitialStateType = {
    initialized: boolean
};

let initialState: InitialStateType = {
    initialized: false
};


const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
};

type SetInitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export const setInitializedSuccess = ():SetInitializedSuccessType => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => async (dispatch: any) => {
    await dispatch(setUserData())
    dispatch(setInitializedSuccess())
}


export default appReducer