import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {followAC, setUsers, unfollowAC} from "../../redux/friendsPage-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users
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
            dispatch(setUsers(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);