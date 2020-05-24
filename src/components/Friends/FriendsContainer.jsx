import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    follow, getUsers,
    unfollow
} from "../../redux/friendsPage-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageFromState, getFollowingInProgressFromState, getIsFetchingFromState,
    getPageSizeFromState,
    getTotalUsersFromState,
    getUsersFromState
} from "../../redux/selectors/users-selector";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize);
    }

    onPageClick = (pageNum) => {
        this.props.getUsers(this.props.pageSize, pageNum);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Friends
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageClick={this.onPageClick}
                    followingInProgress={this.props.followingInProgress}/>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state),
        pageSize: getPageSizeFromState(state),
        totalUsers: getTotalUsersFromState(state),
        currentPage: getCurrentPageFromState(state),
        isFetching: getIsFetchingFromState(state),
        followingInProgress: getFollowingInProgressFromState(state)
    }
}

export default compose(
    connect(mapStateToProps, { getUsers, follow, unfollow })
)(FriendsContainer);