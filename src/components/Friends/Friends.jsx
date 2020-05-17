import React from "react";
import classes from './Friends.module.css';
import * as axios from 'axios';


class Friends extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=10')
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageClick = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsers/this.props.pageSize);
        const pages = [];
        debugger
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div className={classes.wrapperUsers}>
                <div>
                {
                    pages.map((p) => {
                       return <span  className={this.props.currentPage === p && classes.activePage } onClick={()=> {  this.onPageClick(p)   }} >{p}</span>
                    })
                }
                </div>
                {
                    this.props.users.map((user) => {
                        return (
                            <div className={classes.wrapperUser}>
                                <div className={classes.wrapperAVA}>
                                    <div className={classes.ava}>
                                        <img src={user.photos.small
                                            ? user.photos.small
                                            : 'https://yt3.ggpht.com/a/AATXAJxNPBlXaWrUE7XWuir5pH_y6-NhYaqVj57YUQ=s900-c-k-c0xffffffff-no-rj-mo'}/>
                                        <div>{user.name}</div>
                                    </div>
                                    {
                                        user.follow
                                            ? <button onClick={() => {
                                                this.props.unfollow(user.id)
                                            }}>UNFOLLOW</button>
                                            : <button onClick={() => {
                                                this.props.follow(user.id)
                                            }}>FOLLOW</button>
                                    }
                                </div>
                                <div className={classes.wrapperDiscription}>
                                    <div className={classes.country}>{'user.localization.country'}</div>
                                    <div className={classes.city}>{'user.localization.city'}</div>
                                    <div className={classes.status}>{user.status}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default Friends;

















