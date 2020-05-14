import profilePageReducer from "./profilePage-reducer";
import sideBarReducer from "./sidebar-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";

const store = {

    _callSubscriber() {
        console.log('23');
    },

    subscribe(obserser) {
        this._callSubscriber = obserser;
    },

    _state: {
        ProfilePage: {
            postsData: [
                {id: 1, massage: 'i dont know', counterLike: 2},
                {id: 2, massage: 'what?', counterLike: 1}
            ],
            newPostText: '',

        },
        DialogsPage: {
            massagesData: [
                {id: 1, massage: 'AVADA KEDAVRA'},
                {id: 2, massage: 'EXPILARMUS'},
                {id: 3, massage: 'FLEPENDO'},
                {id: 4, massage: 'VINGARDIUM LEVIOSSA'},
                {id: 5, massage: 'bukla'},
            ],
            dialogsData: [
                {id: 1, name: 'Albus'},
                {id: 2, name: 'Harry'},
                {id: 3, name: 'Germiona'},
            ],
            massageText: '',
        },
        sideBar: {}
    },

    get getState() {
        return this._state;
    },

    get postText() {
        return this._state.ProfilePage.newPostText;
    },
    get getPosts() {
        return this._state.ProfilePage.postsData;
    },

    get massageText() {
        return this._state.DialogsPage.massageText;
    },
    get getMessages() {
        return this._state.DialogsPage.massagesData;
    },
    get getDialogs() {
        return this._state.DialogsPage.dialogsData;
    },
    dispatch(action) {

        this._state.ProfilePage = profilePageReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsPageReducer(this._state.DialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this);


    },
}