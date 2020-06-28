import React from 'react'
import styles from './Friends.module.scss'
import {NavLink} from 'react-router-dom'
import withPhoto from './../../assets/unnamed.jpg'
import {UserType} from '../../types/types'
import Button from '../Common/Button/Button'
import cn from 'classnames'

type Props = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Friend = ({user, ...props}: Props) => {
    return (
        <div className={styles.user}>
            <div className={cn(styles.user__avaToggleName, styles.avaToggleName)}>
                <div className={styles.avaToggleName__ava}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={styles.img} src={user.photos.small || withPhoto} alt={'user photo'}/>
                    </NavLink>
                </div>
                <div className={styles.avaToggleName__name}>{user.name}</div>
                <div className={styles.avaToggleName__toggle}>
                    {
                        user.followed
                            ?
                            <Button forDisabled={props.followingInProgress.some(id => id === user.id)}
                                    handleClick={() => {
                                        props.unfollow(user.id)
                                    }} name={'Unfollw'}/>
                            :
                            <Button forDisabled={props.followingInProgress.some(id => id === user.id)}
                                    handleClick={() => {
                                        props.follow(user.id)
                                    }} name={'Follow'}/>
                    }
                </div>
            </div>
            <div className={styles.user__status}>
                <div className={styles.status}><b>Status: </b>{user.status}</div>
            </div>
        </div>
    )
}
export default Friend
