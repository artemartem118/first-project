import {profileAPI} from "../API/api";

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS"
const SET_PHOTO = "profile/SET_PHOTO"

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
        case SET_PHOTO: {
            return {
                ...state,
                userProfile:{...state.userProfile, photos: action.photos}
            };
        }
        default:
            return state;
    }

};

export const addPost = newPost => ({type: ADD_POST, newPost});

export const setUserProfile = user => ({type: SET_USER_PROFILE, user});

export const setUserStatus = status => ({type: SET_STATUS, status});
export const savePhotoSuccess = photos => ({type: SET_PHOTO, photos});


export const getUser = userId => {
    return async dispatch => {

        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
    }
};

export const getStatusUser = userId => {
    return async dispatch => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(response.data));
    };
};
export const updateStatusUser = status => {
    return async dispatch => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
};

export const savePhoto = photo => async dispatch => {
    const response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode ===0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export default profilePageReducer;