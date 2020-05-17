const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
    users: [],
    totalUsers: 1,
    pageSize: 10,
    currentPage: 1,

};


const friendsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, follow: true };
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return { ...user, follow: false }
                    }
                    return user;
                })
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
        default:
            return state;
    }
};


export const followAC = (id) => ({
    type: FOLLOW,
    id: id
});

export const unfollowAC = (id) => ({
    type: UNFOLLOW,
    id: id,
});
export const setUsersAC = (uresr) => ({
    type: SET_USERS,
    users: uresr,
});
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
});
export const setTotalUsersCountAC = (totalUsers) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsers: totalUsers,
});



export default friendsPageReducer;
