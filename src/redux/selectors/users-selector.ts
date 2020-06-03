import {AppState} from '../redux-store'

export const getUsersFromState = (state: AppState) => (state.friendsPage.users)

export const getPageSizeFromState = (state: AppState) => (state.friendsPage.pageSize)

export const getTotalUsersFromState = (state: AppState) => (state.friendsPage.totalUsers)

export const getCurrentPageFromState = (state: AppState) => (state.friendsPage.currentPage)

export const getIsFetchingFromState = (state: AppState) => (state.friendsPage.isFetching)

export const getFollowingInProgressFromState = (state: AppState) => (state.friendsPage.followingInProgress)
