import {profileAPI} from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS"

let initialState = {
    postsData: [
        {id: 1, message: "i dont know", counterLike: 2},
        {id: 2, message: "what?", counterLike: 1}
    ],
    userProfile: null,
    userStatus: "",

};


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: action.newPost,
                counterLike: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.user
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                userStatus: action.status
            };
        }
        default:
            return state;
    }

};

export const addPost = (newPost) => ({
    type: ADD_POST,
    newPost
});

export const setUserProfile = user => ({
    type: SET_USER_PROFILE,
    user
});
export const setUserStatus = status => ({
    type: SET_STATUS,
    status
});


export const getUser = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
};

export const getStatusUser = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });
    };
};
export const updateStatusUser = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserStatus(status));
                    };
                }
            );
    };
};


export default profilePageReducer;