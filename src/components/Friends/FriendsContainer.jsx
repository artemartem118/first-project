import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/friendsPage-reducer";
import * as axios from "axios";
import Preloader from "../Common/Preloader/Preloader";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=10')
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageClick = (pageNum) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }


        return (<>
            {this.props.isFetching ? <Preloader/> : <Friends
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageClick={this.onPageClick}/>}


        </>);
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsers: state.friendsPage.totalUsers,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(FriendsContainer);