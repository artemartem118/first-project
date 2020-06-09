import React from 'react'
import classes from './Friends.module.css'
import Paginator from '../Common/Paginator/Paginator'
import Friend from './Friend'
import Preloader from '../Common/Preloader/Preloader'
import {UserType} from '../../types/types'

type Props = {
    totalUsers: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<UserType>
    followingInProgress: Array<number>

    onPageClick: (pageNum: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Friends: React.FC<Props> = ({totalUsers, pageSize, currentPage, onPageClick, isFetching, users, unfollow, follow, followingInProgress}) => {
    return (
        <div className={classes.wrapperUsers}>
            <Paginator totalItems={totalUsers} pageSize={pageSize} currentPage={currentPage}
                       onPageClick={onPageClick}/>
            {isFetching ? <Preloader/> :
                users.map(user => <Friend unfollow={unfollow}
                                          follow={follow}
                                          followingInProgress={followingInProgress}
                                          user={user}
                                          key={user.id}/>)
            }
        </div>
    )
}
export default Friends





















