import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import friendsPageReducer from "./friendsPage-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    friendsPage: friendsPageReducer,
    auth: authReducer,
    form: formReducer
});


const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;