import React from 'react'
import styles from './Friends.module.scss'
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
        <div className={styles.users}>
            <div className={styles.users__paginator}>
                <Paginator totalItems={totalUsers} pageSize={pageSize} currentPage={currentPage}
                           onPageClick={onPageClick}/>
            </div>
            <div className={styles.users__items}>
                {isFetching ? <Preloader/> :
                    users.map(user => <Friend unfollow={unfollow}
                                              follow={follow}
                                              followingInProgress={followingInProgress}
                                              user={user}
                                              key={user.id}/>)
                }
            </div>
        </div>
    )
}
export default Friends





















