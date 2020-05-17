import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/friendsPage-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsers: state.friendsPage.totalUsers,
        currentPage: state.friendsPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);