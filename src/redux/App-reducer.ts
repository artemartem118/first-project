import {setUserData} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {AppState} from './redux-store'

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: Actions): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

type Actions = SetInitializedSuccessType

type SetInitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
export const setInitializedSuccess = (): SetInitializedSuccessType => ({type: INITIALIZED_SUCCESS})

type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const initializeApp = (): ThunkActionType => async (dispatch) => {
    await dispatch(setUserData())
    dispatch(setInitializedSuccess())
}

export default appReducer
