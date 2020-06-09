import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profilePageReducer from './profilePage-reducer'
import sideBarReducer from './sidebar-reducer'
import dialogsPageReducer from './dialogsPage-reducer'
import friendsPageReducer from './friendsPage-reducer'
import authReducer from './auth-reducer'
import thunk from 'redux-thunk'
import appReducer from './App-reducer'

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    friendsPage: friendsPageReducer,
    auth: authReducer,
    app: appReducer
})

type RootReduscer = typeof rootReducer

export type AppState = ReturnType<RootReduscer>

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk),
// @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

// @ts-ignore
window.store = store

export default store