const store = {

    rerenderEntireTree() {
        console.log('23');
    },

    subscribe(obserser) {
        this.rerenderEntireTree = obserser;
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

        }
    },

    get newPostText() {
        return this._state.ProfilePage.newPostText;
    },
    get massageText() {
        return this._state.DialogsPage.massageText;
    },

    get getPosts() {
        return this._state.ProfilePage.postsData;
    },
    get getMessages() {
        return this._state.DialogsPage.massagesData;
    },
    get getDialogs() {
        return this._state.DialogsPage.dialogsData;
    },

    addPost() {

        let newPost = {
            id: 5,
            massage: this._state.ProfilePage.newPostText,
            counterLike: 0,
        };

        this._state.ProfilePage.postsData.push(newPost);
        this._state.ProfilePage.newPostText = '';
        store.rerenderEntireTree();
    },

    updateTexteareaText(Posttext) {
        this._state.ProfilePage.newPostText = Posttext;
        store.rerenderEntireTree();
    },

    addNewMassage() {
        const newMassage = {
            id: 6,
            massage: this._state.DialogsPage.massageText,
        }
        this._state.DialogsPage.massagesData.push(newMassage);
        this._state.DialogsPage.massageText = '';
        store.rerenderEntireTree();
    },

    updateTexteareaMessage(message) {
        this._state.DialogsPage.massageText = message;
        store.rerenderEntireTree();
    },
}

export default store;