let initialState = {
    postsData: [
        {id: 1, massage: 'i dont know', counterLike: 2},
        {id: 2, massage: 'what?', counterLike: 1}
    ],
    newPostText: '',

};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                massage: state.newPostText,
                counterLike: 0,
            };

            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_TEXTAREA_POST:
            state.newPostText = action.postText;
            return state;
        default:
            return state;
    }
};

const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_POST = 'UPDATE-TEXTAREA-POST';

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateTextareaPostActionCreator = writePostText => ({
    type: UPDATE_TEXTAREA_POST,
    postText: writePostText
});

export default profilePageReducer;