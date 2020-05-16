const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';


let initialState = {
    users: [],
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
        case SET_USER: {
            return {
                ...state,
                users: [...action.users]
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
    id: id
});
export const setUsers = (uresr) => ({
    type: SET_USER,
    users: uresr
});



export default friendsPageReducer;
