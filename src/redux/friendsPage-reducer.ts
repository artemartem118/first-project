import {friendsAPI} from "../API/api"
import {updateObjectInArray} from "../Utils/helpers/object-helper"
import {UserType} from "../types/types"

const FOLLOW = 'friends/FOLLOW'
const UNFOLLOW = 'friends/UNFOLLOW'
const SET_USERS = 'friends/SET_USERS'
const SET_CURRENT_PAGE = 'friends/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'friends/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'friends/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'friends/TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [] as Array<UserType>,
    totalUsers: 1,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>

}

type InitialStateType = typeof initialState


const friendsPageReducer = (state = initialState, action: any): InitialStateType => {

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

type followAccessType = {
    type: typeof FOLLOW
    id: number
}
export const followAccess = (id: number): followAccessType => ({type: FOLLOW, id});

type UnfollowAccessType = {
    type: typeof UNFOLLOW
    id: number
}
export const unfollowAccess = (id: number): UnfollowAccessType => ({type: UNFOLLOW, id});
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users});
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsers: number
}
export const setTotalUsersCount = (totalUsers: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsers
});
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}


export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const getUsers = (pageSize: number = 10, pageNum: number = 1) => {

    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNum))

        const data = await friendsAPI.getUsers(pageSize, pageNum)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {

    dispatch(toggleFollowingInProgress(true, userId));

    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}
export const unfollow = (userId: number) => {

    return (dispatch: any) => {

        followUnfollowFlow(dispatch, userId, friendsAPI.unfollow.bind(friendsAPI), unfollowAccess);
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {

        followUnfollowFlow(dispatch, userId, friendsAPI.follow.bind(friendsAPI), followAccess);
    }
}


export default friendsPageReducer;
