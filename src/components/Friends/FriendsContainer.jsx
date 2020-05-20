import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    follow, getUsers,
    unfollow
} from "../../redux/friendsPage-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {withAutnRedirect} from "../HOC/WithAuthRedirect";

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
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsers: state.friendsPage.totalUsers,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress
    }
}

export default withAutnRedirect(connect(mapStateToProps, { getUsers, follow, unfollow })(FriendsContainer));