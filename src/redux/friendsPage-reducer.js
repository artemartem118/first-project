import {friendsAPI} from "../API/api";
import {updateObjectInArray} from "../Utils/helpers/object-helper";

const FOLLOW = 'friends/FOLLOW';
const UNFOLLOW = 'friends/UNFOLLOW';
const SET_USERS = 'friends/SET_USERS';
const SET_CURRENT_PAGE = 'friends/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'friends/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'friends/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    totalUsers: 1,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

};


const friendsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.id, {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.id, {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsers: action.totalUsers,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(userId => userId !== action.userId)
            }
        }
        default:
            return state;
    }
};


export const followAccess = id => ({type: FOLLOW, id});

export const unfollowAccess = id => ({type: UNFOLLOW, id});

export const setUsers = users => ({type: SET_USERS, users});

export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = totalUsers => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const getUsers = (pageSize = 10, pageNum = 1) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNum));

        const data = await friendsAPI.getUsers(pageSize, pageNum);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingInProgress(true, userId));

    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}
export const unfollow = userId => {

    return dispatch => {

        followUnfollowFlow(dispatch, userId, friendsAPI.unfollow.bind(friendsAPI), unfollowAccess);
    }
}
export const follow = userId => {
    return dispatch => {

        followUnfollowFlow(dispatch, userId, friendsAPI.follow.bind(friendsAPI), followAccess);
    }
}


export default friendsPageReducer;
