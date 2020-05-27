import React from "react";
import classes from './Friends.module.css';
import Paginator from "../Common/Paginator/Paginator";
import Friend from "./Friend";
import Preloader from "../Common/Preloader/Preloader";


const Friends = (props) => {
    return (
        <div className={classes.wrapperUsers}>
            <Paginator totalUsers={props.totalUsers} pageSize={props.pageSize} currentPage={props.currentPage}
                       onPageClick={props.onPageClick}/>
            {props.isFetching ? <Preloader/> :
                props.users.map(user => <Friend unfollow={props.unfollow}
                                                follow={props.follow}
                                                followingInProgress={props.followingInProgress}
                                                user={user}
                                                key={user.id}/>)
            }
        </div>
    );
}
export default Friends;





















