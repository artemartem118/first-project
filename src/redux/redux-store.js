import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import friendsPageReducer from "./friendsPage-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    friendsPage: friendsPageReducer,
    auth: authReducer,
});


const store = createStore(reducers);

window.store = store;
export default store;