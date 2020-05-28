import React from "react";
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";
import withPhoto from "./../../assets/unnamed.jpg"


const Friend = ({user, ...props}) => {
    return (
        <div className={classes.wrapperUser}>
            <div className={classes.wrapperAVA}>
                <div className={classes.ava}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={classes.img} src={user.photos.small || withPhoto }/>
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
                <div className={classes.status}><b>Status:</b> {user.status}</div>
            </div>
        </div>
    )
}
export default Friend;





















