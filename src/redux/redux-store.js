import {combineReducers, createStore} from "redux";
import profilePageReducer, {addPostActionCreator} from "./profilePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer
});

const store = createStore(reducers);
export default store;