import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    follow, getUsers,
    unfollow
} from "../../redux/friendsPage-reducer";
import {compose} from "redux";
import {
    getCurrentPageFromState, getFollowingInProgressFromState, getIsFetchingFromState,
    getPageSizeFromState,
    getTotalUsersFromState,
    getUsersFromState
} from "../../redux/selectors/users-selector";
import {UserType} from "../../types/types";
import {AppState} from "../../redux/redux-store";

type MapStateProps = {
    users: Array<UserType>
    totalUsers: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

type Props = MapStateProps & MapDispatchProps

class FriendsContainer extends React.Component<Props> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize,this.props.currentPage);
    }

    onPageClick = (pageNum: number) => {
        this.props.getUsers(this.props.pageSize, pageNum);
    }

    render() {
        return (
            <>
                { <Friends
                    totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    isFetching={this.props.isFetching}
                    onPageClick={this.onPageClick}
                    followingInProgress={this.props.followingInProgress}/>}
            </>
        );
    }
}

const mapStateToProps = (state: AppState): MapStateProps => {
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
    connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, { getUsers, follow, unfollow })
)(FriendsContainer);