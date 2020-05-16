import {combineReducers, createStore} from "redux";
import profilePageReducer, {addPostActionCreator} from "./profilePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import friendsPageReducer from "./friendsPage-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    friendsPage: friendsPageReducer
});


const store = createStore(reducers);

window.store = store;
export default store;