import React from "react";
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI} from "../../API/api";


const Friends = (props) => {

    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.wrapperUsers}>
            <div>
                {
                    pages.map((p) => {
                        return <span className={props.currentPage === p && classes.activePage} onClick={() => {
                            props.onPageClick(p)
                        }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map((user) => {
                    return (
                        <div className={classes.wrapperUser}>
                            <div className={classes.wrapperAVA}>
                                <div className={classes.ava}>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img className={classes.img} src={user.photos.small
                                            ? user.photos.small
                                            : 'https://yt3.ggpht.com/a/AATXAJxNPBlXaWrUE7XWuir5pH_y6-NhYaqVj57YUQ=s900-c-k-c0xffffffff-no-rj-mo'}/>
                                    </NavLink>
                                    <div>{user.name}</div>
                                </div>
                                {
                                    user.followed
                                        ? <button onClick={() => {
                                            axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {
                                                withCredentials: true,
                                                headers: {"API-KEY": "02b9c283-65ab-4aa6-9c25-cf1f7a717d1b"}
                                            })
                                                .then(response => {
                                                    debugger
                                                        props.unfollow(user.id)
                                                });
                                        }}>UNFOLLOW</button>
                                        : <button onClick={() => {
                                            axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + user.id, {}, {
                                                withCredentials: true,
                                                headers: {"API-KEY": "02b9c283-65ab-4aa6-9c25-cf1f7a717d1b"}
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                });
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
export default Friends;





















