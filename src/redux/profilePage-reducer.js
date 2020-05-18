const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_POST = 'UPDATE-TEXTAREA-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'i dont know', counterLike: 2},
        {id: 2, message: 'what?', counterLike: 1}
    ],
    newPostText: '',
    userProfile: null,

};


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                counterLike: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_TEXTAREA_POST: {
            return {
                ...state,
                newPostText: action.postText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.user
            };
        }
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateTextareaPostActionCreator = writePostText => ({
    type: UPDATE_TEXTAREA_POST,
    postText: writePostText
});
export const setUserProfile = user => ({
    type: SET_USER_PROFILE,
    user
});

export default profilePageReducer;