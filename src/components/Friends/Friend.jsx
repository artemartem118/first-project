import React from "react";
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";


const Friend = ({user, ...props}) => {
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
                        ? <button
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.unfollow(user.id)
                            }}>UNFOLLOW</button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.follow(user.id)
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
}
export default Friend;





















