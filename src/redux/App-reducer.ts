import {setUserData} from './auth-reducer'
import {ThunkAction} from 'redux-thunk'
import {ActionsTypes, AppState} from './redux-store'

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: Actions): InitialStateType => {
    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

type Actions = ActionsTypes<typeof actionsApp>

export const actionsApp = {
    setInitializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'} as const)
}

type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const initializeApp = (): ThunkActionType => async (dispatch) => {
    await dispatch(setUserData())
    dispatch(actionsApp.setInitializedSuccess())
}

export default appReducer
