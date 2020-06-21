import React from 'react'
import classes from './Friends.module.css'
import {NavLink} from 'react-router-dom'
import withPhoto from './../../assets/unnamed.jpg'
import {UserType} from '../../types/types'

type Props = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Friend = ({user, ...props}: Props) => {
    return (
        <div className={classes.wrapperUser}>
            <div className={classes.wrapperAVA}>
                <div className={classes.ava}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={classes.img} src={user.photos.small || withPhoto}/>
                    </NavLink>
                    <div>{user.name}</div>
                </div>
                {
                    user.followed
                        ? <button
                            className={classes.btnFriend}
                            disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.unfollow(user.id)
                            }}>UNFOLLOW</button>
                        : <button
                            className={classes.btnFriend}
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
export default Friend
