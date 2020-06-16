import {friendsAPI, ResultCodes} from '../API/api'
import {updateObjectInArray} from '../Utils/helpers/object-helper'
import {UserType} from '../types/types'
import {ActionsTypes, AppState} from './redux-store'
import {Dispatch} from 'redux'
import {ThunkAction} from 'redux-thunk'

let initialState = {
    users: [] as Array<UserType>,
    totalUsers: 1,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>

}

type InitialStateType = typeof initialState

const friendsPageReducer = (state = initialState, action: Actions): InitialStateType => {

    switch (action.type) {
        case 'friends/FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: true})
            }
        }
        case 'friends/UNFOLLOW': {
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: false})
            }
        }
        case 'friends/SET_USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'friends/SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'friends/SET_TOTAL_USERS_COUNT': {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case 'friends/TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'friends/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(userId => userId !== action.userId)
            }
        }
        default:
            return state
    }
}

type Actions = ActionsTypes<typeof actionsFriends>

export const actionsFriends = {
    followAccess: (id: number) => ({type: 'friends/FOLLOW', id} as const),
    unfollowAccess: (id: number) => ({type: 'friends/UNFOLLOW', id} as const),
    setUsers: (users: Array<UserType>) => ({type: 'friends/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'friends/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsers: number) => ({type: 'friends/SET_TOTAL_USERS_COUNT', totalUsers} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'friends/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'friends/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}

type DispatchType = Dispatch<Actions>
type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, Actions>

export const getUsers = (pageSize: number = 10, pageNum: number = 1): ThunkActionType => {

    return async (dispatch: DispatchType) => {
        dispatch(actionsFriends.toggleIsFetching(true))
        dispatch(actionsFriends.setCurrentPage(pageNum))

        const data = await friendsAPI.getUsers(pageSize, pageNum)
        dispatch(actionsFriends.toggleIsFetching(false))
        dispatch(actionsFriends.setUsers(data.items))
        dispatch(actionsFriends.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => Actions) => {

    dispatch(actionsFriends.toggleFollowingInProgress(true, userId))

    const followUnfollowFlowData = await apiMethod(userId)

    if (followUnfollowFlowData.resultCode === ResultCodes.success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actionsFriends.toggleFollowingInProgress(false, userId))
}
export const unfollow = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, friendsAPI.unfollow.bind(friendsAPI), actionsFriends.unfollowAccess)
    }
}
export const follow = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, friendsAPI.follow.bind(friendsAPI), actionsFriends.followAccess)
    }
}

export default friendsPageReducer
